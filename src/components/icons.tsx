import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft, FaRegCircleXmark } from "react-icons/fa6"

type IconProps = React.HTMLAttributes<HTMLDivElement>

export const Icons = {
  none: (props: IconProps) => (
    <FaRegCircleXmark {...props}/>
  ),
  facebook: (props: IconProps) => (
      <FaFacebook {...props}/>
  ),
  github: (props: IconProps) => (
      <FaGithub {...props}/>
  ),
  google: (props: IconProps) => (
    <FaGoogle {...props}/>
  ),
  microsoft: (props: IconProps) => (
    <FaMicrosoft {...props}/>
  ),
  logo: (props: IconProps) => (
    <div {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </div>
  ),
  spinner: (props: IconProps) => (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  ),
}

export const NO_ICON = "none";