import Provider from "@/components/Provider";
import Header from "@/components/Header";

export const metadata = {
  title: "Stephan mit Ph",
  description: "Personal website of Stephan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta robot="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Provider>
     
        <body>
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
