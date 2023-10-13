import "./globals.css";
import { Footer } from "./ui/common/Footer";
import { Header } from "./ui/common/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
