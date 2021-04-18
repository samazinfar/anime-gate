import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="logo">
        <div>
          <svg
            width="65"
            height="55"
            viewBox="0 0 65 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1875 13.0359L3 7V13.0359L8.17878 21.375H55.9462L61.125 13.0359V7L54.25 13.0359H10.1875Z"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M56.9731 19.4554H7.67065L9.57276 27.24H54.9949L56.9731 19.4554Z"
              fill="white"
            />
            <path
              d="M41.625 26.25H48.75V46.5H41.625V26.25Z"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M15.3748 26.25H21.8748V46.5H15.3748V26.25Z"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M51.7502 52H39.2502L39.6813 49.1186L41.1021 47L49.4514 47.0847L51.1037 49.1186L51.7502 52Z"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M24.8748 52H12.3748L12.8058 49.839L14.2266 48.25L22.5759 48.3136L24.2282 49.839L24.8748 52Z"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M9.03167 13.5491L4.03784 8.55695V13.5491L9.03167 20.4461H55.0931L60.0869 13.5491V8.55695L55.0931 13.5491H9.03167Z"
              fill="#003459"
              stroke="#003459"
              stroke-width="3"
            />
            <path
              d="M54.2502 18.25H9.25024L12.0627 24.5H51.4377L54.2502 18.25Z"
              fill="#0096FF"
            />
            <path
              d="M42.1538 25.0177H48.2969V47.2961H42.1538V25.0177Z"
              fill="#003459"
              stroke="#0096FF"
              stroke-width="1.5"
            />
            <path
              d="M51.1699 51.8676H39.7053L40.1007 49.4207L41.4038 47.6215L49.0615 47.6934L50.5769 49.4207L51.1699 51.8676Z"
              fill="#0096FF"
              stroke="#0096FF"
              stroke-width="2"
            />
            <rect
              x="15.8281"
              y="25.0177"
              width="5.71845"
              height="22.2784"
              fill="#003459"
              stroke="#0096FF"
              stroke-width="1.5"
            />
            <path
              d="M24.4192 51.8676H12.9546L13.3499 49.4206L15.0777 47.6215L22.3107 47.6934L23.8262 49.4206L24.4192 51.8676Z"
              fill="#0096FF"
              stroke="#0096FF"
              stroke-width="2"
            />
          </svg>
        </div>
        <p className="logoName">
          ANIME <br />
          GATE
        </p>
      </div>
      <div className="navigation">
        <div className="navigationElement">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.57194 12.6657C4.57194 12.4889 4.63215 12.3194 4.7393 12.1944C4.84646 12.0694 4.9918 11.9991 5.14335 11.9991H15.4286C15.5801 11.9991 15.7255 12.0694 15.8326 12.1944C15.9398 12.3194 16 12.4889 16 12.6657C16 12.8425 15.9398 13.012 15.8326 13.137C15.7255 13.262 15.5801 13.3323 15.4286 13.3323H5.14335C4.9918 13.3323 4.84646 13.262 4.7393 13.137C4.63215 13.012 4.57194 12.8425 4.57194 12.6657ZM4.57194 7.33328C4.57194 7.1565 4.63215 6.98696 4.7393 6.86195C4.84646 6.73695 4.9918 6.66672 5.14335 6.66672H15.4286C15.5801 6.66672 15.7255 6.73695 15.8326 6.86195C15.9398 6.98696 16 7.1565 16 7.33328C16 7.51006 15.9398 7.6796 15.8326 7.8046C15.7255 7.9296 15.5801 7.99983 15.4286 7.99983H5.14335C4.9918 7.99983 4.84646 7.9296 4.7393 7.8046C4.63215 7.6796 4.57194 7.51006 4.57194 7.33328ZM4.57194 2.00085C4.57194 1.82407 4.63215 1.65453 4.7393 1.52953C4.84646 1.40452 4.9918 1.3343 5.14335 1.3343H15.4286C15.5801 1.3343 15.7255 1.40452 15.8326 1.52953C15.9398 1.65453 16 1.82407 16 2.00085C16 2.17763 15.9398 2.34717 15.8326 2.47218C15.7255 2.59718 15.5801 2.6674 15.4286 2.6674H5.14335C4.9918 2.6674 4.84646 2.59718 4.7393 2.47218C4.63215 2.34717 4.57194 2.17763 4.57194 2.00085ZM3.26229 0.195825C3.3155 0.257742 3.35772 0.331297 3.38653 0.412277C3.41533 0.493256 3.43016 0.58007 3.43016 0.667745C3.43016 0.75542 3.41533 0.842233 3.38653 0.923213C3.35772 1.00419 3.3155 1.07775 3.26229 1.13966L1.54808 3.13932C1.495 3.2014 1.43195 3.25065 1.36253 3.28425C1.29311 3.31785 1.21869 3.33515 1.14353 3.33515C1.06837 3.33515 0.993947 3.31785 0.924527 3.28425C0.855108 3.25065 0.792053 3.2014 0.738974 3.13932L0.167571 2.47277C0.114445 2.4108 0.0723023 2.33722 0.0435504 2.25625C0.0147984 2.17528 7.91649e-10 2.08849 0 2.00085C-7.91649e-10 1.91321 0.0147984 1.82642 0.0435504 1.74545C0.0723023 1.66448 0.114445 1.5909 0.167571 1.52893C0.220698 1.46696 0.283769 1.4178 0.353182 1.38426C0.422595 1.35072 0.496992 1.33346 0.572125 1.33346C0.647257 1.33346 0.721654 1.35072 0.791067 1.38426C0.860481 1.4178 0.923551 1.46696 0.976678 1.52893L1.14353 1.7249L2.45318 0.195825C2.50626 0.133751 2.56932 0.0845026 2.63874 0.0508997C2.70816 0.0172969 2.78258 0 2.85774 0C2.93289 0 3.00732 0.0172969 3.07674 0.0508997C3.14616 0.0845026 3.20921 0.133751 3.26229 0.195825ZM3.26229 5.52825C3.3155 5.59017 3.35772 5.66372 3.38653 5.7447C3.41533 5.82568 3.43016 5.9125 3.43016 6.00017C3.43016 6.08784 3.41533 6.17466 3.38653 6.25564C3.35772 6.33662 3.3155 6.41017 3.26229 6.47209L1.54808 8.47175C1.495 8.53382 1.43195 8.58307 1.36253 8.61667C1.29311 8.65028 1.21869 8.66757 1.14353 8.66757C1.06837 8.66757 0.993947 8.65028 0.924527 8.61667C0.855108 8.58307 0.792053 8.53382 0.738974 8.47175L0.167571 7.8052C0.0602773 7.68004 0 7.51028 0 7.33328C0 7.15627 0.0602773 6.98652 0.167571 6.86136C0.274866 6.7362 0.420388 6.66588 0.572125 6.66588C0.723861 6.66588 0.869384 6.7362 0.976678 6.86136L1.14353 7.05732L2.45318 5.52825C2.50626 5.46618 2.56932 5.41693 2.63874 5.38333C2.70816 5.34972 2.78258 5.33243 2.85774 5.33243C2.93289 5.33243 3.00732 5.34972 3.07674 5.38333C3.14616 5.41693 3.20921 5.46618 3.26229 5.52825ZM3.26229 10.8607C3.3155 10.9226 3.35772 10.9961 3.38653 11.0771C3.41533 11.1581 3.43016 11.2449 3.43016 11.3326C3.43016 11.4203 3.41533 11.5071 3.38653 11.5881C3.35772 11.669 3.3155 11.7426 3.26229 11.8045L1.54808 13.8042C1.495 13.8662 1.43195 13.9155 1.36253 13.9491C1.29311 13.9827 1.21869 14 1.14353 14C1.06837 14 0.993947 13.9827 0.924527 13.9491C0.855108 13.9155 0.792053 13.8662 0.738974 13.8042L0.167571 13.1376C0.0602773 13.0125 0 12.8427 0 12.6657C0 12.4887 0.0602773 12.3189 0.167571 12.1938C0.274866 12.0686 0.420388 11.9983 0.572125 11.9983C0.723861 11.9983 0.869384 12.0686 0.976678 12.1938L1.14353 12.3897L2.45318 10.8607C2.50626 10.7986 2.56932 10.7494 2.63874 10.7158C2.70816 10.6821 2.78258 10.6649 2.85774 10.6649C2.93289 10.6649 3.00732 10.6821 3.07674 10.7158C3.14616 10.7494 3.20921 10.7986 3.26229 10.8607Z"
              fill="white"
            />
          </svg>

          <p className="navigationText">My List</p>
          <hr className="separator" />
        </div>
        <div className="navigationElement">
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg"
              d="M3.82431 19.9737C4.05002 20.0776 4.28811 19.8527 4.14992 19.6665C3.39986 18.6561 2.68959 16.9558 3.82121 14.7661C5.70834 11.1146 6.85665 9.22335 6.85665 9.22335C6.85665 9.22335 7.46743 11.4304 9.1231 13.3928C10.7166 15.2815 11.5888 17.6568 10.1827 19.6356C10.0507 19.8213 10.2834 20.0404 10.5077 19.9411C12.2482 19.1704 14.2004 17.6246 14.4207 14.5484C14.5019 13.6084 14.3801 12.2924 13.7711 10.6317C12.988 8.52692 12.0253 7.54479 11.4682 7.12303C11.3016 6.99685 11.0425 7.10868 11.0562 7.29992C11.2185 9.57097 10.2314 10.1473 9.66955 8.84848C9.44516 8.32973 9.3143 7.43247 9.3143 6.33979C9.3143 4.52067 8.70454 2.64806 7.36024 1.12636C7.01065 0.730642 6.6016 0.360871 6.1323 0.0455439C5.9624 -0.0686391 5.71611 0.0461321 5.73167 0.231818C5.83489 1.46502 5.74137 4.9993 2.15904 9.22165C-1.08907 13.1384 0.169566 16.1464 0.616182 16.9611C1.47007 18.5218 2.66112 19.4384 3.82431 19.9737Z"
              fill="white"
            />
          </svg>
          <p className="navigationText">News</p>
          <hr className="separator" />
        </div>
        <div className="navigationElement">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg"
              d="M21.778 14.9338L18.0368 10.6697L15.5571 11.7619L15.5571 11.7619C15.4877 11.3528 15.3188 10.9622 15.0586 10.6372L17.5435 9.54266L16.9217 3.90786C16.8675 3.41316 16.2807 3.18486 15.9065 3.51352L11.644 7.25089L12.7384 9.73581C12.3256 9.80383 11.9387 9.97415 11.6099 10.2329L10.5154 7.74794L4.88062 8.36988C4.386 8.424 4.15763 9.01078 4.48631 9.38496L8.22367 13.6475L10.7086 12.5531C10.7766 12.9659 10.947 13.3528 11.2057 13.6816L8.72076 14.7761L9.34263 20.4109C9.39676 20.9056 9.98356 21.1339 10.3578 20.8052L14.6203 17.0678L13.5259 14.5829C13.9372 14.5188 14.3256 14.3446 14.6529 14.0896L14.6529 14.0896L15.7451 16.5693L21.3837 15.9489C21.8783 15.8948 22.1067 15.3079 21.778 14.9338ZM12.6874 13.3042C12.0517 13.0572 11.7445 12.3397 11.9873 11.7146C12.2301 11.0897 12.9408 10.7675 13.5768 11.0146C14.2057 11.2588 14.5222 11.9727 14.2769 12.6041C14.0332 13.2315 13.32 13.5499 12.6874 13.3042Z"
              fill="white"
            />
          </svg>

          <p className="navigationText">Discover</p>
          <hr className="separator" />
        </div>
        <div className="navigationElement">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg"
              d="M1.25 15C1.25 15 0 15 0 13.75C0 12.5 1.25 8.75 7.5 8.75C13.75 8.75 15 12.5 15 13.75C15 15 13.75 15 13.75 15H1.25ZM7.5 7.5C8.49456 7.5 9.44839 7.10491 10.1517 6.40165C10.8549 5.69839 11.25 4.74456 11.25 3.75C11.25 2.75544 10.8549 1.80161 10.1517 1.09835C9.44839 0.395088 8.49456 0 7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75C3.75 4.74456 4.14509 5.69839 4.84835 6.40165C5.55161 7.10491 6.50544 7.5 7.5 7.5V7.5Z"
              fill="white"
            />
          </svg>

          <p className="navigationText">About</p>
        </div>
      </div>
      <div className="positionSearchBar">
        <div className="searchBar">
          <input className="input" placeholder="Search an anime" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.95608 0.985135C4.25698 1.96603 3.04148 3.5501 2.53373 5.44518C2.02587 7.34025 2.2866 9.31977 3.26749 11.0189C4.57582 13.2848 7.01532 14.6925 9.63426 14.6925C10.4612 14.6925 11.2817 14.5501 12.0595 14.277L15.3637 20L17.7196 18.6398L14.416 12.9178C15.5319 11.963 16.3353 10.6967 16.7237 9.2473C17.2314 7.35222 16.9707 5.37281 15.9898 3.67361C14.6816 1.40768 12.242 0 9.62316 0C8.3404 0 7.07234 0.340602 5.95608 0.985135ZM13.6339 5.03384C14.2515 6.10364 14.4156 7.35005 14.0959 8.54324C13.7762 9.73644 13.0109 10.7338 11.9411 11.3514C11.2379 11.7574 10.4402 11.972 9.63426 11.972C7.98424 11.972 6.44739 11.0856 5.62353 9.65864C5.00587 8.58884 4.84177 7.34254 5.16159 6.14923C5.4813 4.95604 6.24662 3.95871 7.31642 3.34095C8.0195 2.93506 8.81724 2.72047 9.62316 2.72047C11.2733 2.72047 12.81 3.6069 13.6339 5.03384Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
