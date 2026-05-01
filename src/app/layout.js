import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";



export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:['400','500','600','700']
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight:['400','500','600','700']
});



export const metadata = {
  title: "Dragon news",
  description: "Best News portal In Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
   data-theme="light"
      lang="en"
      className= "h-full antialiased"
    >
      <body className={`${poppins.className} ${montserrat.className} min-h-full flex flex-col`}>
       
        {children}
        </body>
    </html>
  );
}
