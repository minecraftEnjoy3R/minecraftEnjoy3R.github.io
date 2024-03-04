import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ЗАО ВОЛНА",
  description: "Рыба Воронежа. Свежий карп, зеркальный карп, Свежая Щука. Выращенная своими руками в чистом пруду. Выращенная с любовью",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="md:px-20">
          <Header/>
          {children}
          </div>
          </body>
    </html>
  );
}
