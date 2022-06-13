import React from 'react';
import './Placeholder.scss';

export default function Placeholder() {
  return (
    <div className="placeholder">
      <div className="placeholder-image">
        <svg
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M61.4384 18.6211L58.0355 20.197C59.8365 24.0858 60.7497 28.0575 60.7497 32.0013C60.7497 47.5785 48.0769 60.2513 32.4998 60.2513C26.8159 60.2513 21.3369 58.5013 16.5562 55.1768C17.297 53.1782 16.8674 50.8403 15.264 49.237C13.0709 47.0438 9.50213 47.044 7.309 49.237C5.11575 51.4301 5.11575 54.9987 7.309 57.192C9.15363 59.0367 11.979 59.3341 14.14 58.0626C19.6151 61.9523 25.9316 64.0013 32.4998 64.0013C50.1196 64.0013 64.4997 49.6202 64.4997 32.0013C64.4997 27.5092 63.4697 23.0075 61.4384 18.6211ZM12.6124 54.5405C11.8813 55.2716 10.692 55.2717 9.96062 54.5405C9.2295 53.8093 9.2295 52.6198 9.96062 51.8888C10.6915 51.1578 11.8811 51.1576 12.6124 51.8888C13.3435 52.6197 13.3435 53.8093 12.6124 54.5405Z"
              fill="#66E287"
            />
            <path
              d="M41.875 24.5V18.875H45.625V15.125H19.375V18.875H23.125V24.5C23.125 27.5635 24.6023 30.2881 26.8815 32C24.6023 33.7119 23.125 36.4365 23.125 39.5V45.125H19.375V48.875H45.625V45.125H41.875V39.5C41.875 36.4365 40.3977 33.7119 38.1185 32C40.3977 30.2881 41.875 27.5635 41.875 24.5ZM38.125 39.5V45.125H26.875V39.5C26.875 36.3984 29.3984 33.875 32.5 33.875C35.6016 33.875 38.125 36.3984 38.125 39.5ZM38.125 24.5C38.125 27.6016 35.6016 30.125 32.5 30.125C29.3984 30.125 26.875 27.6016 26.875 24.5V18.875H38.125V24.5Z"
              fill="#66E287"
            />
            <path
              d="M49.7358 14.7644C51.9288 16.9574 55.4975 16.9575 57.6908 14.7644C59.884 12.5712 59.884 9.0025 57.6908 6.80937C55.8419 4.9605 53.0155 4.67025 50.8598 5.93875C45.3846 2.049 39.0681 0 32.5 0C14.8801 0 0.5 14.3811 0.5 32C0.5 36.4921 1.53 40.9939 3.56138 45.3802L6.96425 43.8044C5.16325 39.9155 4.25 35.9439 4.25 32C4.25 16.4229 16.9229 3.75 32.5 3.75C38.1839 3.75 43.6629 5.5 48.4435 8.8245C47.7028 10.8231 48.1324 13.161 49.7358 14.7644ZM52.3874 9.461C53.1185 8.73 54.3079 8.72987 55.0391 9.461C55.7703 10.1921 55.7703 11.3816 55.0391 12.1126C54.308 12.8437 53.1185 12.8439 52.3874 12.1126C51.6563 11.3816 51.6563 10.192 52.3874 9.461Z"
              fill="#66E287"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="64"
                height="64"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="placeholder-title">You data is being prepared.</div>
      <div className="placeholder-description">
        Depending on your website's traffic you'll start seeing your data in the
        next few hours. We will also email you to let you know when meaningful
        data starts to show up
      </div>
    </div>
  );
}