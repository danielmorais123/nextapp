import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Package from "./Package";

export default function Packages() {
  return (
    <div>
      <div className="text-center flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faCube} className="w-10 h-10" />
        <p className="text-3xl">Get started with GitHub Packages</p>
        <p className="text-gray text-sm">
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-gray text-center">Choose a registry</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Package
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
                data-package-type="Docker"
              >
                <path
                  d="M27.724 11.585c-.076-.06-.785-.596-2.28-.596a7.266 7.266 0 00-1.178.101c-.29-1.983-1.929-2.95-2.003-2.993l-.401-.232-.264.381a5.382 5.382 0 00-.714 1.669c-.268 1.132-.105 2.195.47 3.104-.694.387-1.808.483-2.034.491H.877a.877.877 0 00-.875.872 13.272 13.272 0 00.808 4.74c.635 1.665 1.58 2.893 2.81 3.644 1.378.844 3.617 1.326 6.155 1.326 1.147.004 2.291-.1 3.418-.31a14.287 14.287 0 004.461-1.62 12.263 12.263 0 003.044-2.492c1.462-1.654 2.332-3.497 2.98-5.134h.258c1.6 0 2.583-.64 3.126-1.177.36-.342.642-.759.825-1.22l.114-.336-.276-.218z"
                  fill="#2496ED"
                ></path>
                <path
                  d="M2.586 12.97h2.472c.119 0 .215-.096.215-.216v-2.201a.216.216 0 00-.214-.217H2.586a.216.216 0 00-.216.216v2.203c0 .119.097.215.216.215zM5.992 12.97h2.472c.119 0 .215-.096.215-.216v-2.201a.216.216 0 00-.214-.217H5.992a.217.217 0 00-.217.217v2.201c0 .12.098.216.217.216zM9.45 12.97h2.471c.12 0 .216-.096.216-.216v-2.201a.216.216 0 00-.214-.217H9.45a.216.216 0 00-.216.216v2.203c0 .119.097.215.216.215zM12.867 12.97h2.471c.12 0 .217-.096.217-.216v-2.201a.217.217 0 00-.217-.217h-2.471a.216.216 0 00-.216.216v2.203c0 .119.097.215.216.215zM5.992 9.803h2.472c.119 0 .215-.097.215-.217V7.385a.216.216 0 00-.215-.216H5.992a.217.217 0 00-.217.216v2.201c0 .12.097.217.217.217zM9.45 9.803h2.471c.12 0 .216-.097.216-.217V7.385a.216.216 0 00-.216-.216H9.45a.216.216 0 00-.216.216v2.201c0 .12.096.217.216.217zM12.867 9.803h2.471c.12 0 .217-.097.217-.217V7.385a.217.217 0 00-.217-.216h-2.471a.216.216 0 00-.216.216v2.201c0 .12.096.217.216.217zM12.867 6.634h2.471c.12 0 .217-.096.217-.215V4.216A.217.217 0 0015.338 4h-2.471a.216.216 0 00-.216.216v2.203c0 .119.097.215.216.215zM16.314 12.97h2.471c.12 0 .216-.096.217-.216v-2.201a.217.217 0 00-.217-.217h-2.471a.216.216 0 00-.216.216v2.203c0 .119.096.215.216.215z"
                  fill="#2496ED"
                ></path>
              </svg>
            }
            name="Docker"
            desc="A software platform used for building applications based on containers — small and lightweight execution environments."
          />{" "}
          <Package
            desc="A default package manager used for the Java programming language and the Java runtime environment."
            name="Apache Maven"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M18.26.132c-.437.26-1.161.994-2.028 2.057l.796 1.51a19.717 19.717 0 011.764-2.216l-.067.073c-.185.205-.747.864-1.594 2.173.816-.04 2.07-.209 3.092-.385.303-1.714-.299-2.5-.299-2.5S19.16-.401 18.26.135V.132z"
                    fill="url(#paint0_linear)"
                  ></path>
                  <path
                    d="M15.588 12.818c-.101.019-.205.037-.313.055h-.002c.106-.013.211-.032.315-.055z"
                    fill="#BE202E"
                  ></path>
                  <path
                    opacity=".35"
                    d="M15.588 12.818c-.101.019-.205.037-.313.055h-.002c.106-.013.211-.032.315-.055z"
                    fill="#BE202E"
                  ></path>
                  <path
                    d="M15.855 11.498h-.001l-.001.001c.017-.002.033-.006.05-.007.067-.01.134-.022.198-.036l-.247.042h.001z"
                    fill="#BE202E"
                  ></path>
                  <path
                    opacity=".35"
                    d="M15.855 11.498h-.001l-.001.001c.017-.002.033-.006.05-.007.067-.01.134-.022.198-.036l-.247.042h.001z"
                    fill="#BE202E"
                  ></path>
                  <path
                    d="M14.683 7.603c.242-.455.487-.9.735-1.332.256-.45.516-.885.779-1.305l.046-.075c.26-.413.521-.811.785-1.191l-.795-1.51a35.919 35.919 0 00-.893 1.15 44.623 44.623 0 00-1.65 2.376c-.243.374-.48.751-.713 1.131l1.035 2.057c.221-.44.445-.875.671-1.302z"
                    fill="url(#paint1_linear)"
                  ></path>
                  <path
                    d="M9.97 19.192c-.137.379-.274.764-.413 1.159l-.005.017-.059.167c-.093.266-.174.505-.36 1.049.306.14.55.508.783.926a1.684 1.684 0 00-.541-1.155c1.503.069 2.798-.314 3.467-1.419.06-.099.115-.202.164-.313-.304.388-.681.553-1.392.513l-.004.002.004-.002c1.046-.471 1.57-.923 2.035-1.672.109-.177.215-.371.325-.587-.914.945-1.974 1.213-3.09 1.01l-.837.092-.077.213z"
                    fill="url(#paint2_linear)"
                  ></path>
                  <path
                    d="M10.36 17.306a114.142 114.142 0 011.712-4.21 83.368 83.368 0 011.917-4.148l.023-.044-1.035-2.057-.05.083a46.013 46.013 0 00-2.09 3.82c-.227.466-.43.917-.615 1.351-.314.739-.595 1.491-.843 2.254a24.688 24.688 0 00-.604 2.327l1.04 2.066c.18-.482.361-.962.546-1.442z"
                    fill="url(#paint3_linear)"
                  ></path>
                  <path
                    d="M8.761 16.755c-.13.652-.22 1.311-.27 1.974l-.005.07c-.325-.524-1.194-1.035-1.192-1.03.622.907 1.094 1.808 1.165 2.693-.333.069-.79-.031-1.317-.227.55.509.963.65 1.123.687-.505.032-1.03.381-1.56.783.774-.318 1.4-.443 1.848-.342A154.863 154.863 0 006.417 28a.62.62 0 00.421-.412c.128-.43.971-3.251 2.292-6.96l.114-.317.033-.088c.14-.39.284-.786.433-1.19l.103-.278.002-.005-1.039-2.066-.015.071z"
                    fill="url(#paint4_linear)"
                  ></path>
                  <path
                    d="M14.173 9.078l-.09.185-.273.57c-.099.21-.2.425-.3.645l-.155.335a88.231 88.231 0 00-1.067 2.433 118.266 118.266 0 00-2.228 5.701l-.013.034.837-.093-.05-.008c1-.125 2.33-.878 3.19-1.807a7.953 7.953 0 001.088-1.524c.248-.44.48-.927.702-1.467.193-.472.379-.982.558-1.536-.247.127-.511.219-.784.274-.104.022-.209.04-.315.055h.002c.934-.362 1.522-1.059 1.95-1.913-.34.233-.721.401-1.123.495a2.777 2.777 0 01-.199.036l-.05.007h.001l.001-.001c.297-.12.577-.278.834-.47.176-.133.335-.286.477-.456a3.27 3.27 0 00.335-.484l.09-.177c.13-.264.234-.499.317-.706.086-.214.161-.433.225-.655.031-.115.05-.208.061-.275a1 1 0 01-.108.075c-.282.17-.766.324-1.155.396l.768-.085-.768.085-.018.003-.118.02.02-.01-2.628.29-.014.029z"
                    fill="url(#paint5_linear)"
                  ></path>
                  <path
                    d="M17.132 3.73c-.233.362-.49.772-.764 1.236l-.043.074c-.259.438-.51.88-.754 1.326a62.56 62.56 0 00-1.383 2.682l2.628-.29c.766-.354 1.109-.675 1.441-1.139a14.756 14.756 0 001.037-1.755c.216-.421.411-.853.584-1.294.099-.255.178-.492.232-.7.048-.184.086-.358.115-.524-1.024.175-2.277.344-3.093.384z"
                    fill="url(#paint6_linear)"
                  ></path>
                  <path
                    d="M15.852 11.499l.05-.008-.05.008z"
                    fill="#BE202E"
                  ></path>
                  <path
                    opacity=".35"
                    d="M15.852 11.499l.05-.008-.05.008z"
                    fill="#BE202E"
                  ></path>
                  <path
                    d="M15.852 11.498c.018-.001.034-.005.05-.007l-.05.007z"
                    fill="url(#paint7_linear)"
                  ></path>
                  <path
                    d="M15.854 11.5s.002 0 .002-.003c0 0-.002 0-.002.002z"
                    fill="#BE202E"
                  ></path>
                  <path
                    opacity=".35"
                    d="M15.854 11.5s.002 0 .002-.003c0 0-.002 0-.002.002z"
                    fill="#BE202E"
                  ></path>
                  <path d="M15.854 11.498z" fill="url(#paint8_linear)"></path>
                  <path
                    d="M21.023 2.563v.078h.18v.513h.084V2.64h.182v-.078h-.446zm1.042 0l-.201.413-.203-.413h-.1v.59h.077v-.468l.2.406h.052l.2-.406v.469h.077v-.59h-.102z"
                    fill="#6D6E71"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="16.096"
                    y1="-.557"
                    x2="21.928"
                    y2="-2.168"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F69923"></stop>
                    <stop offset=".312" stop-color="#F79A23"></stop>
                    <stop offset=".838" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="-8.552"
                    y1="22.724"
                    x2="3.42"
                    y2="-2.79"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1=".562"
                    y1="23.242"
                    x2="7.696"
                    y2="8.038"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#282662"></stop>
                    <stop offset=".095" stop-color="#662E8D"></stop>
                    <stop offset=".788" stop-color="#9F2064"></stop>
                    <stop offset=".949" stop-color="#CD2032"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="-8.122"
                    y1="21.176"
                    x2="3.85"
                    y2="-4.338"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear"
                    x1="-.886"
                    y1="22.301"
                    x2="5.405"
                    y2="8.893"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#282662"></stop>
                    <stop offset=".095" stop-color="#662E8D"></stop>
                    <stop offset=".788" stop-color="#9F2064"></stop>
                    <stop offset=".949" stop-color="#CD2032"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear"
                    x1="-5.493"
                    y1="22.411"
                    x2="6.479"
                    y2="-3.103"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear"
                    x1="-6.358"
                    y1="23.936"
                    x2="5.614"
                    y2="-1.579"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear"
                    x1="-4.801"
                    y1="22.735"
                    x2="7.17"
                    y2="-2.779"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear"
                    x1="6.852"
                    y1="14.825"
                    x2="12.723"
                    y2="2.424"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".323" stop-color="#9E2064"></stop>
                    <stop offset=".63" stop-color="#C92037"></stop>
                    <stop offset=".751" stop-color="#CD2335"></stop>
                    <stop offset="1" stop-color="#E97826"></stop>
                  </linearGradient>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h28v28H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <Package
            desc="A free and open source package manager used for the Microsoft development platforms including .NET."
            name="NuGet"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M20.445 4.766h-7.334a7.587 7.587 0 00-7.62 7.598V19.7a7.588 7.588 0 007.587 7.587h7.335A7.587 7.587 0 0028 19.689v-7.324a7.587 7.587 0 00-7.555-7.598zm-7.411 8.202a2.196 2.196 0 11-3.136-3.077 2.196 2.196 0 013.136 3.077zm7.28 10.64a3.843 3.843 0 110-7.686 3.843 3.843 0 010 7.686z"
                  fill="#004880"
                ></path>
                <path
                  d="M3.02 5.215a2.196 2.196 0 100-4.392 2.196 2.196 0 000 4.392z"
                  fill="#fff"
                  stroke="#004880"
                ></path>
                <path
                  d="M3.02 6.04a3.02 3.02 0 100-6.04 3.02 3.02 0 000 6.04z"
                  fill="#004880"
                ></path>
              </svg>
            }
          />
          <Package
            desc="A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
            name="RubyGems"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clip-path="url(#clip0)" fill="#D6422B">
                  <path d="M9.072 9.308l-.016-.015-3.504 3.453 8.508 8.37 3.504-3.439 5.003-4.93-3.504-3.454v-.016H9.056l.016.031z"></path>
                  <path d="M14.028.084l-12.39 7v14l12.39 7 12.39-7v-14l-12.39-7zM24.05 19.746L14.028 25.44 4.006 19.746V8.391l10.022-5.694L24.05 8.391v11.355z"></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h28v28H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <Package
            desc="A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
            name="npm"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 28"
                fill="none"
                data-package-type="NPM"
              >
                <path
                  d="M25.9434 0H2.05656C0.920751 0 0 0.920751 0 2.05656V25.9434C0 27.0792 0.920751 28 2.05656 28H25.9434C27.0792 28 28 27.0792 28 25.9434V2.05656C28 0.920751 27.0792 0 25.9434 0Z"
                  fill="#CB0000"
                ></path>
                <path
                  d="M5.96399 22.3652H14.0463L14.0565 10.2624H18.0874L18.0771 22.3755H22.1182L22.1285 6.2315L5.98455 6.21094L5.96399 22.3652Z"
                  fill="white"
                ></path>
              </svg>
            }
          />
          <Package
            desc="A single place for your team to manage Docker images and decide who can see and access your images."
            name="Containers"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                data-package-type="Container"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.152.682a2.25 2.25 0 012.269 0l.007.004 6.957 4.276a2.276 2.276 0 011.126 1.964v7.516c0 .81-.432 1.56-1.133 1.968l-.002.001-11.964 7.037-.004.003a2.276 2.276 0 01-2.284 0l-.026-.015-6.503-4.502a2.268 2.268 0 01-1.096-1.943V9.438c0-.392.1-.77.284-1.1l.003-.006.014-.026a2.28 2.28 0 01.82-.827h.002L13.152.681zm.757 1.295h-.001L2.648 8.616l6.248 4.247a.776.776 0 00.758-.01h.001l11.633-6.804-6.629-4.074a.75.75 0 00-.75.003zM18 9.709l-3.25 1.9v7.548L18 17.245V9.709zm1.5-.878v7.532l2.124-1.25a.777.777 0 00.387-.671V7.363L19.5 8.831zm-9.09 5.316l2.84-1.66v7.552l-3.233 1.902v-7.612c.134-.047.265-.107.391-.18l.002-.002zm-1.893 7.754V14.33a2.277 2.277 0 01-.393-.18l-.023-.014-6.102-4.147v7.003c0 .275.145.528.379.664l.025.014 6.114 4.232z"
                  fill="currentColor"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
