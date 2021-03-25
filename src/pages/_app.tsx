
import "../css.generated/default.css";
import "../css.generated/components.css";
import "../css.generated/root.css";
import "../css.generated/professionalexperience.css"
import "../css.generated/personalprojects.css"


import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="container"><Component {...pageProps} /></div>
}

export default MyApp;