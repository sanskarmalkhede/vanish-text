// src/emails/VerificationEmail.tsx

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Verify Your Email</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f5f5f5',
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  width="600"
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    overflow: 'hidden',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: '#1e40af',
                          padding: '24px',
                          textAlign: 'center',
                        }}
                      >
                        <h1
                          style={{
                            margin: 0,
                            color: '#ffffff',
                            fontSize: 24,
                          }}
                        >
                          Mystery Message
                        </h1>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p
                          style={{
                            fontSize: 16,
                            color: '#333333',
                            marginBottom: 16,
                          }}
                        >
                          Hi <strong>{username}</strong>,
                        </p>
                        <p
                          style={{
                            fontSize: 16,
                            color: '#333333',
                            marginBottom: 24,
                          }}
                        >
                          Thanks for signing up! Use the verification code
                          below to confirm your email address. This code will
                          expire in <strong>10 minutes</strong>.
                        </p>

                        {/* OTP Code Box */}
                        <div
                          style={{
                            textAlign: 'center',
                            marginBottom: 32,
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '16px 24px',
                              fontFamily: "'Courier New', monospace",
                              fontSize: 20,
                              letterSpacing: 4,
                              backgroundColor: '#e0e7ff',
                              color: '#1e40af',
                              borderRadius: 4,
                            }}
                          >
                            {otp}
                          </span>
                        </div>

                        {/* Button */}
                        <div
                          style={{
                            textAlign: 'center',
                            marginBottom: 24,
                          }}
                        >
                          <a
                            href={`https://your-app.com/verify?email=${encodeURIComponent(
                              username
                            )}&code=${otp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-block',
                              padding: '12px 24px',
                              backgroundColor: '#1e40af',
                              color: '#ffffff',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              borderRadius: 4,
                            }}
                          >
                            Verify My Email
                          </a>
                        </div>

                        <p
                          style={{
                            fontSize: 14,
                            color: '#666666',
                          }}
                        >
                          If you didn’t request this, you can safely ignore this
                          email.
                        </p>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: '#f0f0f0',
                          padding: '16px',
                          textAlign: 'center',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 12,
                            color: '#888888',
                            margin: 0,
                          }}
                        >
                          © {currentYear} Mystery Message. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
