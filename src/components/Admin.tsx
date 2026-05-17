import { useEffect, useState } from 'react';
import { getMessages } from '@/src/lib/firebaseServices';
import { Loader2, Mail, User } from 'lucide-react';

interface MessageItem {
  id: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  createdAt?: { seconds?: number; nanoseconds?: number };
}

export default function Admin() {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getMessages();
        setMessages(result as MessageItem[]);
      } catch (err) {
        setError('Failed to load messages.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, []);

  return (
    <section className="min-h-screen py-24 px-6 bg-slate-950/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-400">Admin Dashboard</p>
            <h1 className="mt-3 text-4xl font-display font-bold">Submitted Messages</h1>
            <p className="mt-3 text-foreground/60 max-w-2xl">
              This page shows messages sent through the contact form. Use it to review inquiries quickly.
            </p>
          </div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <User size={16} /> Back to site
          </a>
        </div>

        <div className="space-y-6">
          {isLoading ? (
            <div className="flex items-center gap-3 text-primary-400">
              <Loader2 className="animate-spin" size={20} /> Loading messages...
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 text-red-200">
              {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-foreground/60">
              No contact messages have been submitted yet.
            </div>
          ) : (
            messages.map((message) => {
              const createdAt = message.createdAt?.seconds
                ? new Date(message.createdAt.seconds * 1000).toLocaleString()
                : 'Unknown';

              return (
                <article key={message.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm text-primary-400 uppercase tracking-[0.35em]">{message.subject || 'Contact Message'}</p>
                      <h2 className="mt-3 text-2xl font-bold">{message.name || 'Anonymous'}</h2>
                      <p className="mt-2 text-sm text-foreground/60">{createdAt}</p>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Mail size={20} />
                      <span>{message.email || 'No email provided'}</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl bg-slate-950/80 p-6 text-foreground/80">
                    <p className="whitespace-pre-line text-sm leading-relaxed">{message.message || 'No message content.'}</p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
