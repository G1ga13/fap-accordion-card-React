import "./Quotes.css";
import { useEffect, useState } from "react";
import { FetchData } from "../../Services/Api";
import Pointer from "../../assets/pointer.svg";

function Quote() {
  const [data, setData] = useState({ quotes: [] });
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    FetchData(setData);
  }, []);

  return (
    <>
      <h1 className="quotes_title">FAQ</h1>
      {data.quotes.slice(0, 5).map((el) => {
        const id = Number(el.id);
        let quoteClass = "quote_text";
        if (openId === id) {
          quoteClass = "quote_text quote_open";
        } else {
          quoteClass = "quote_text";
        }
        let headerClass = "quote_header";
        if (openId === id) {
          headerClass = "quote_header header_open";
        } else {
          headerClass = "quote_header";
        }

        return (
          <div key={id} className="quote_box">
            <div className={headerClass}>
              <p className="author">{el.author}</p>
              <button
                className={openId === id ? "pointer open" : "pointer"}
                onClick={() => {
                  if (openId === id) {
                    setOpenId(null);
                  } else {
                    setOpenId(id);
                  }
                }}
              >
                <img className="pointer_img" src={Pointer} alt="toggle" />
              </button>
            </div>
            <p className={quoteClass}>{el.quote}</p>
          </div>
        );
      })}
    </>
  );
}

export default Quote;
