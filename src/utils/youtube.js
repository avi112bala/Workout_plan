// Accepts a raw 11-char id, a youtube.com/watch?v= url, a youtu.be/ url, or a full <iframe> embed
// snippet (people often paste the whole embed code) and returns just the video id, or null.
export function extractYouTubeId(input) {
  if (!input) return null
  const value = input.trim()

  const idOnly = /^[a-zA-Z0-9_-]{11}$/
  if (idOnly.test(value)) return value

  const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /src="[^"]*embed\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = value.match(pattern)
    if (match) return match[1]
  }

  return null
}
