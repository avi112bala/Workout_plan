import { useState, useEffect } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [showIOSGuide, setShowIOSGuide] = useState(false)
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true)

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // console.log('SW Registered:', r)
    },
    onRegisterError(error) {
      console.error('SW registration error', error)
    },
  })

  useEffect(() => {
    // Check if already in standalone mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true

    if (isStandalone) {
      setIsInstalled(true)
    }

    // iOS detection
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent) && !window.MSStream
    setIsIOS(isIosDevice)

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setIsInstalled(true)
      }
      setDeferredPrompt(null)
    } else if (isIOS) {
      setShowIOSGuide(true)
    }
  }

  const closeToast = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <>
      {/* Top Status Bar: Online/Offline badge & Install Button */}
      <div className="pwa-header-bar">
        {!isOnline && (
          <div className="pwa-badge offline-badge" title="App running offline with cached data">
            <span className="pwa-status-dot offline-dot"></span>
            Offline Mode
          </div>
        )}

        {!isInstalled && (deferredPrompt || isIOS) && (
          <button
            type="button"
            className="pwa-install-btn"
            onClick={handleInstallClick}
            aria-label="Install Workout App as PWA"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Install App
          </button>
        )}
      </div>

      {/* iOS Installation Guide Modal */}
      {showIOSGuide && (
        <div className="modal-backdrop" onClick={() => setShowIOSGuide(false)}>
          <div className="modal ios-guide-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Install on iOS</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowIOSGuide(false)}
                aria-label="Close guide"
              >
                ✕
              </button>
            </div>
            <div className="ios-guide-content">
              <ol>
                <li>
                  Tap the <strong>Share</strong> icon (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle' }}>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  ) in Safari navigation bar.
                </li>
                <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                <li>Tap <strong>"Add"</strong> in the top right corner to launch like a native app.</li>
              </ol>
              <button
                type="button"
                className="submit-btn full-width"
                onClick={() => setShowIOSGuide(false)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PWA Update / Offline Ready Toast */}
      {(offlineReady || needRefresh) && (
        <div className="pwa-toast" role="alert">
          <div className="pwa-toast-message">
            {offlineReady ? (
              <span>⚡ App is ready to work offline</span>
            ) : (
              <span>✨ New version available!</span>
            )}
          </div>
          <div className="pwa-toast-actions">
            {needRefresh && (
              <button
                type="button"
                className="pwa-toast-btn reload"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}
            <button
              type="button"
              className="pwa-toast-btn close"
              onClick={closeToast}
              aria-label="Close toast"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  )
}
