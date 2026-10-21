/**
 * Calls the /api/chat serverless function (Gemini).
 * Returns null on any problem (no API key set, network error, timeout, local dev without /api),
 * so the widget can fall back to the scripted replies in chatEngine.ts.
 */
export interface AIReply {
  reply: string;
  showBookingCard: boolean;
}

export async function askAI(
  messages: { role: 'user' | 'bot'; text: string }[],
  timeoutMs = 15000
): Promise<AIReply | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || typeof data.reply !== 'string' || !data.reply.trim()) return null;
    return { reply: data.reply, showBookingCard: !!data.showBookingCard };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
