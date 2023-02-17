import React, { SVGProps } from "react";

export const ColumnIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="#5A5869"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.5003 0.666504H1.50033C1.27931 0.666504 1.06735 0.754301 0.91107 0.910582C0.75479 1.06686 0.666992 1.27882 0.666992 1.49984V16.4998C0.666992 16.7209 0.75479 16.9328 0.91107 17.0891C1.06735 17.2454 1.27931 17.3332 1.50033 17.3332H16.5003C16.7213 17.3332 16.9333 17.2454 17.0896 17.0891C17.2459 16.9328 17.3337 16.7209 17.3337 16.4998V1.49984C17.3337 1.27882 17.2459 1.06686 17.0896 0.910582C16.9333 0.754301 16.7213 0.666504 16.5003 0.666504V0.666504ZM8.16699 15.6665H2.33366V2.33317H8.16699V15.6665ZM15.667 15.6665H9.83366V2.33317H15.667V15.6665Z" />
    </svg>
  );
};
export const MinusPath = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.18 4H10.28C10.5452 4 10.7996 3.89464 10.9871 3.70711C11.1746 3.51957 11.28 3.26522 11.28 3C11.28 2.73478 11.1746 2.48043 10.9871 2.29289C10.7996 2.10536 10.5452 2 10.28 2H8.18C7.91478 2 7.66043 2.10536 7.47289 2.29289C7.28536 2.48043 7.18 2.73478 7.18 3C7.18 3.26522 7.28536 3.51957 7.47289 3.70711C7.66043 3.89464 7.91478 4 8.18 4ZM3 11.28C3.26522 11.28 3.51957 11.1746 3.70711 10.9871C3.89464 10.7996 4 10.5452 4 10.28V8.18C4 7.91478 3.89464 7.66043 3.70711 7.47289C3.51957 7.28536 3.26522 7.18 3 7.18C2.73478 7.18 2.48043 7.28536 2.29289 7.47289C2.10536 7.66043 2 7.91478 2 8.18V10.28C2 10.5452 2.10536 10.7996 2.29289 10.9871C2.48043 11.1746 2.73478 11.28 3 11.28ZM14.46 4C14.46 4.26522 14.5654 4.51957 14.7529 4.70711C14.9404 4.89464 15.1948 5 15.46 5C15.7252 5 15.9796 4.89464 16.1671 4.70711C16.3546 4.51957 16.46 4.26522 16.46 4V3C16.46 2.73478 16.3546 2.48043 16.1671 2.29289C15.9796 2.10536 15.7252 2 15.46 2H14.46C14.1948 2 13.9404 2.10536 13.7529 2.29289C13.5654 2.48043 13.46 2.73478 13.46 3C13.46 3.26522 13.5654 3.51957 13.7529 3.70711C13.9404 3.89464 14.1948 4 14.46 4ZM21 7.54H16.46C16.46 7.27478 16.3546 7.02043 16.1671 6.83289C15.9796 6.64536 15.7252 6.54 15.46 6.54C15.1948 6.54 14.9404 6.64536 14.7529 6.83289C14.5654 7.02043 14.46 7.27478 14.46 7.54H8.54C8.27478 7.54 8.02043 7.64536 7.83289 7.83289C7.64536 8.02043 7.54 8.27478 7.54 8.54V14.46C7.27478 14.46 7.02043 14.5654 6.83289 14.7529C6.64536 14.9404 6.54 15.1948 6.54 15.46C6.54 15.7252 6.64536 15.9796 6.83289 16.1671C7.02043 16.3546 7.27478 16.46 7.54 16.46V21C7.54 21.2652 7.64536 21.5196 7.83289 21.7071C8.02043 21.8946 8.27478 22 8.54 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V8.54C22 8.27478 21.8946 8.02043 21.7071 7.83289C21.5196 7.64536 21.2652 7.54 21 7.54ZM20 20H9.54V15.47V9.54H20V20ZM4 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V4C2 4.26522 2.10536 4.51957 2.29289 4.70711C2.48043 4.89464 2.73478 5 3 5C3.26522 5 3.51957 4.89464 3.70711 4.70711C3.89464 4.51957 4 4.26522 4 4C4.26522 4 4.51957 3.89464 4.70711 3.70711C4.89464 3.51957 5 3.26522 5 3C5 2.73478 4.89464 2.48043 4.70711 2.29289C4.51957 2.10536 4.26522 2 4 2ZM4 14.46C4 14.1948 3.89464 13.9404 3.70711 13.7529C3.51957 13.5654 3.26522 13.46 3 13.46C2.73478 13.46 2.48043 13.5654 2.29289 13.7529C2.10536 13.9404 2 14.1948 2 14.46V15.46C2 15.7252 2.10536 15.9796 2.29289 16.1671C2.48043 16.3546 2.73478 16.46 3 16.46H4C4.26522 16.46 4.51957 16.3546 4.70711 16.1671C4.89464 15.9796 5 15.7252 5 15.46C5 15.1948 4.89464 14.9404 4.70711 14.7529C4.51957 14.5654 4.26522 14.46 4 14.46Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Focus = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9C3.26522 9 3.51957 8.89464 3.70711 8.70711C3.89464 8.51957 4 8.26522 4 8V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H8C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V8C2 8.26522 2.10536 8.51957 2.29289 8.70711C2.48043 8.89464 2.73478 9 3 9ZM8 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V16C4 15.7348 3.89464 15.4804 3.70711 15.2929C3.51957 15.1054 3.26522 15 3 15C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H8C8.26522 22 8.51957 21.8946 8.70711 21.7071C8.89464 21.5196 9 21.2652 9 21C9 20.7348 8.89464 20.4804 8.70711 20.2929C8.51957 20.1054 8.26522 20 8 20ZM17 13C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H15.86C15.6804 10.3121 15.3208 9.68457 14.8181 9.18188C14.3154 8.67919 13.6879 8.31956 13 8.14V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V8.14C10.3121 8.31956 9.68457 8.67919 9.18188 9.18188C8.67919 9.68457 8.31956 10.3121 8.14 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H8.14C8.31956 13.6879 8.67919 14.3154 9.18188 14.8181C9.68457 15.3208 10.3121 15.6804 11 15.86V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V15.86C13.6879 15.6804 14.3154 15.3208 14.8181 14.8181C15.3208 14.3154 15.6804 13.6879 15.86 13H17ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM21 15C20.7348 15 20.4804 15.1054 20.2929 15.2929C20.1054 15.4804 20 15.7348 20 16V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H16C15.7348 20 15.4804 20.1054 15.2929 20.2929C15.1054 20.4804 15 20.7348 15 21C15 21.2652 15.1054 21.5196 15.2929 21.7071C15.4804 21.8946 15.7348 22 16 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V16C22 15.7348 21.8946 15.4804 21.7071 15.2929C21.5196 15.1054 21.2652 15 21 15ZM19 2H16C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3C15 3.26522 15.1054 3.51957 15.2929 3.70711C15.4804 3.89464 15.7348 4 16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V8C20 8.26522 20.1054 8.51957 20.2929 8.70711C20.4804 8.89464 20.7348 9 21 9C21.2652 9 21.5196 8.89464 21.7071 8.70711C21.8946 8.51957 22 8.26522 22 8V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Folder = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 17.9999H14.82C14.6707 17.5806 14.4299 17.1996 14.1151 16.8848C13.8003 16.5701 13.4194 16.3293 13 16.1799V13.9999H16.67C17.2871 13.9973 17.8783 13.751 18.3147 13.3146C18.751 12.8782 18.9974 12.2871 19 11.6699V6.32995C18.9974 5.7128 18.751 5.12169 18.3147 4.6853C17.8783 4.24891 17.2871 4.00258 16.67 3.99995H12.67L12.54 3.58995C12.3858 3.13389 12.0947 2.73649 11.7063 2.45194C11.318 2.1674 10.8513 2.00956 10.37 1.99995H7.37C7.06103 1.99598 6.75434 2.05325 6.46762 2.16845C6.1809 2.28364 5.91983 2.45448 5.69949 2.6711C5.47915 2.88773 5.30389 3.14585 5.18383 3.43057C5.06377 3.71528 5.0013 4.02096 5 4.32995V11.6699C5.00263 12.2871 5.24896 12.8782 5.68535 13.3146C6.12174 13.751 6.71286 13.9973 7.33 13.9999H11V16.1799C10.5806 16.3293 10.1997 16.5701 9.8849 16.8848C9.57011 17.1996 9.32932 17.5806 9.18 17.9999H3C2.73478 17.9999 2.48043 18.1053 2.29289 18.2928C2.10536 18.4804 2 18.7347 2 18.9999C2 19.2652 2.10536 19.5195 2.29289 19.7071C2.48043 19.8946 2.73478 19.9999 3 19.9999H9.18C9.3902 20.5791 9.77363 21.0795 10.2782 21.4331C10.7827 21.7867 11.3839 21.9764 12 21.9764C12.6161 21.9764 13.2173 21.7867 13.7218 21.4331C14.2264 21.0795 14.6098 20.5791 14.82 19.9999H21C21.2652 19.9999 21.5196 19.8946 21.7071 19.7071C21.8946 19.5195 22 19.2652 22 18.9999C22 18.7347 21.8946 18.4804 21.7071 18.2928C21.5196 18.1053 21.2652 17.9999 21 17.9999ZM7.33 11.9999C7.24248 11.9999 7.15854 11.9652 7.09665 11.9033C7.03477 11.8414 7 11.7575 7 11.6699V4.32995C7 4.24243 7.03477 4.15849 7.09665 4.0966C7.15854 4.03472 7.24248 3.99995 7.33 3.99995H10.33C10.401 3.99876 10.4705 4.0205 10.5281 4.06194C10.5857 4.10337 10.6285 4.16229 10.65 4.22995L11.01 5.31995C11.0791 5.52522 11.213 5.7025 11.3915 5.82513C11.5701 5.94776 11.7836 6.00911 12 5.99995H16.67C16.7575 5.99995 16.8415 6.03472 16.9033 6.0966C16.9652 6.15849 17 6.24243 17 6.32995V11.6699C17 11.7575 16.9652 11.8414 16.9033 11.9033C16.8415 11.9652 16.7575 11.9999 16.67 11.9999H7.33ZM12 19.9999C11.8022 19.9999 11.6089 19.9413 11.4444 19.8314C11.28 19.7215 11.1518 19.5654 11.0761 19.3826C11.0004 19.1999 10.9806 18.9988 11.0192 18.8049C11.0578 18.6109 11.153 18.4327 11.2929 18.2928C11.4327 18.153 11.6109 18.0577 11.8049 18.0192C11.9989 17.9806 12.2 18.0004 12.3827 18.0761C12.5654 18.1518 12.7216 18.2799 12.8315 18.4444C12.9414 18.6088 13 18.8022 13 18.9999C13 19.2652 12.8946 19.5195 12.7071 19.7071C12.5196 19.8946 12.2652 19.9999 12 19.9999Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Trash = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19ZM14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Link = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12ZM10 15H7C6.20435 15 5.44129 14.6839 4.87868 14.1213C4.31607 13.5587 4 12.7956 4 12C4 11.2044 4.31607 10.4413 4.87868 9.87868C5.44129 9.31607 6.20435 9 7 9H10C10.2652 9 10.5196 8.89464 10.7071 8.70711C10.8946 8.51957 11 8.26522 11 8C11 7.73478 10.8946 7.48043 10.7071 7.29289C10.5196 7.10536 10.2652 7 10 7H7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17H10C10.2652 17 10.5196 16.8946 10.7071 16.7071C10.8946 16.5196 11 16.2652 11 16C11 15.7348 10.8946 15.4804 10.7071 15.2929C10.5196 15.1054 10.2652 15 10 15ZM17 7H14C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8C13 8.26522 13.1054 8.51957 13.2929 8.70711C13.4804 8.89464 13.7348 9 14 9H17C17.7956 9 18.5587 9.31607 19.1213 9.87868C19.6839 10.4413 20 11.2044 20 12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15H14C13.7348 15 13.4804 15.1054 13.2929 15.2929C13.1054 15.4804 13 15.7348 13 16C13 16.2652 13.1054 16.5196 13.2929 16.7071C13.4804 16.8946 13.7348 17 14 17H17C18.3261 17 19.5979 16.4732 20.5355 15.5355C21.4732 14.5979 22 13.3261 22 12C22 10.6739 21.4732 9.40215 20.5355 8.46447C19.5979 7.52678 18.3261 7 17 7Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4099 11.9999L19.7099 5.70994C19.8982 5.52164 20.004 5.26624 20.004 4.99994C20.004 4.73364 19.8982 4.47825 19.7099 4.28994C19.5216 4.10164 19.2662 3.99585 18.9999 3.99585C18.7336 3.99585 18.4782 4.10164 18.2899 4.28994L11.9999 10.5899L5.70994 4.28994C5.52164 4.10164 5.26624 3.99585 4.99994 3.99585C4.73364 3.99585 4.47824 4.10164 4.28994 4.28994C4.10164 4.47825 3.99585 4.73364 3.99585 4.99994C3.99585 5.26624 4.10164 5.52164 4.28994 5.70994L10.5899 11.9999L4.28994 18.2899C4.19621 18.3829 4.12182 18.4935 4.07105 18.6154C4.02028 18.7372 3.99414 18.8679 3.99414 18.9999C3.99414 19.132 4.02028 19.2627 4.07105 19.3845C4.12182 19.5064 4.19621 19.617 4.28994 19.7099C4.3829 19.8037 4.4935 19.8781 4.61536 19.9288C4.73722 19.9796 4.86793 20.0057 4.99994 20.0057C5.13195 20.0057 5.26266 19.9796 5.38452 19.9288C5.50638 19.8781 5.61698 19.8037 5.70994 19.7099L11.9999 13.4099L18.2899 19.7099C18.3829 19.8037 18.4935 19.8781 18.6154 19.9288C18.7372 19.9796 18.8679 20.0057 18.9999 20.0057C19.132 20.0057 19.2627 19.9796 19.3845 19.9288C19.5064 19.8781 19.617 19.8037 19.7099 19.7099C19.8037 19.617 19.8781 19.5064 19.9288 19.3845C19.9796 19.2627 20.0057 19.132 20.0057 18.9999C20.0057 18.8679 19.9796 18.7372 19.9288 18.6154C19.8781 18.4935 19.8037 18.3829 19.7099 18.2899L13.4099 11.9999Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const Eye = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.267 9.66659C16.5836 5.75825 13.417 3.33325 10.0003 3.33325C6.58363 3.33325 3.41697 5.75825 1.73363 9.66659C1.68775 9.77172 1.66406 9.8852 1.66406 9.99992C1.66406 10.1146 1.68775 10.2281 1.73363 10.3333C3.41697 14.2416 6.58363 16.6666 10.0003 16.6666C13.417 16.6666 16.5836 14.2416 18.267 10.3333C18.3129 10.2281 18.3365 10.1146 18.3365 9.99992C18.3365 9.8852 18.3129 9.77172 18.267 9.66659ZM10.0003 14.9999C7.3503 14.9999 4.85863 13.0916 3.41697 9.99992C4.85863 6.90825 7.3503 4.99992 10.0003 4.99992C12.6503 4.99992 15.142 6.90825 16.5836 9.99992C15.142 13.0916 12.6503 14.9999 10.0003 14.9999ZM10.0003 6.66659C9.34103 6.66659 8.69656 6.86208 8.1484 7.22835C7.60024 7.59462 7.17299 8.11522 6.9207 8.72431C6.66841 9.33339 6.6024 10.0036 6.73102 10.6502C6.85963 11.2968 7.1771 11.8908 7.64328 12.3569C8.10945 12.8231 8.7034 13.1406 9.35 13.2692C9.9966 13.3978 10.6668 13.3318 11.2759 13.0795C11.885 12.8272 12.4056 12.4 12.7719 11.8518C13.1381 11.3037 13.3336 10.6592 13.3336 9.99992C13.3336 9.11586 12.9824 8.26802 12.3573 7.6429C11.7322 7.01777 10.8844 6.66659 10.0003 6.66659ZM10.0003 11.6666C9.67066 11.6666 9.34843 11.5688 9.07435 11.3857C8.80027 11.2026 8.58665 10.9423 8.4605 10.6377C8.33435 10.3332 8.30135 9.99807 8.36566 9.67477C8.42997 9.35147 8.5887 9.05449 8.82179 8.82141C9.05488 8.58832 9.35185 8.42958 9.67515 8.36528C9.99845 8.30097 10.3336 8.33397 10.6381 8.46012C10.9426 8.58627 11.2029 8.79989 11.3861 9.07397C11.5692 9.34805 11.667 9.67028 11.667 9.99992C11.667 10.4419 11.4914 10.8659 11.1788 11.1784C10.8663 11.491 10.4423 11.6666 10.0003 11.6666Z"
        fill="#F93E6C"
      />
    </svg>
  );
};
export const Divider = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="2"
      height="24"
      viewBox="0 0 2 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="0.999999"
        y2="23"
        stroke="#EAEAEC"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const TwoArrowsRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.42 11.6199C22.3724 11.4972 22.301 11.385 22.21 11.2899L19.71 8.78994C19.5217 8.60164 19.2663 8.49585 19 8.49585C18.7337 8.49585 18.4783 8.60164 18.29 8.78994C18.1017 8.97824 17.9959 9.23364 17.9959 9.49994C17.9959 9.76624 18.1017 10.0216 18.29 10.2099L19.09 10.9999H14.5C14.2348 10.9999 13.9804 11.1053 13.7929 11.2928C13.6054 11.4804 13.5 11.7347 13.5 11.9999C13.5 12.2652 13.6054 12.5195 13.7929 12.707C13.9804 12.8946 14.2348 12.9999 14.5 12.9999H19.09L18.29 13.7899C18.1963 13.8829 18.1219 13.9935 18.0711 14.1154C18.0203 14.2372 17.9942 14.3679 17.9942 14.4999C17.9942 14.632 18.0203 14.7627 18.0711 14.8845C18.1219 15.0064 18.1963 15.117 18.29 15.2099C18.383 15.3037 18.4936 15.3781 18.6154 15.4288C18.7373 15.4796 18.868 15.5057 19 15.5057C19.132 15.5057 19.2627 15.4796 19.3846 15.4288C19.5064 15.3781 19.617 15.3037 19.71 15.2099L22.21 12.7099C22.301 12.6148 22.3724 12.5027 22.42 12.3799C22.52 12.1365 22.52 11.8634 22.42 11.6199Z"
        fill="#F93E6C"
      />
      <path
        d="M8.09499 13.0018L3.50499 13.0018C3.23977 13.0018 2.98542 12.8964 2.79788 12.7089C2.61034 12.5213 2.50499 12.267 2.50499 12.0018C2.50499 11.7366 2.61034 11.4822 2.79788 11.2947C2.98542 11.1071 3.23977 11.0018 3.50499 11.0018L8.09499 11.0018L7.29499 10.2118C7.20126 10.1188 7.12686 10.0082 7.0761 9.88634C7.02533 9.76449 6.99919 9.63378 6.99919 9.50177C6.99919 9.36976 7.02533 9.23905 7.0761 9.11719C7.12686 8.99533 7.20126 8.88473 7.29499 8.79177C7.38795 8.69804 7.49855 8.62365 7.62041 8.57288C7.74227 8.52211 7.87298 8.49597 8.00499 8.49597C8.137 8.49597 8.2677 8.52211 8.38956 8.57288C8.51142 8.62365 8.62202 8.69804 8.71499 8.79177L11.215 11.2918C11.306 11.3869 11.3774 11.499 11.425 11.6218C11.525 11.8652 11.525 12.1383 11.425 12.3818C11.3774 12.5045 11.306 12.6167 11.215 12.7118L8.71499 15.2118C8.52668 15.4001 8.27129 15.5059 8.00499 15.5059C7.73868 15.5059 7.48329 15.4001 7.29499 15.2118C7.10668 15.0235 7.00089 14.7681 7.00089 14.5018C7.00089 14.2355 7.10668 13.9801 7.29499 13.7918L8.09499 13.0018Z"
        fill="#F93E6C"
      />
    </svg>
  );
};
export const ChevronDownSmall = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8335 6.1133C11.7086 5.98913 11.5396 5.91943 11.3635 5.91943C11.1873 5.91943 11.0184 5.98913 10.8935 6.1133L8.50013 8.47329L6.14013 6.1133C6.01522 5.98913 5.84625 5.91943 5.67013 5.91943C5.494 5.91943 5.32504 5.98913 5.20013 6.1133C5.13764 6.17527 5.08805 6.249 5.0542 6.33024C5.02036 6.41148 5.00293 6.49862 5.00293 6.58663C5.00293 6.67464 5.02036 6.76177 5.0542 6.84301C5.08805 6.92425 5.13764 6.99799 5.20013 7.05996L8.02679 9.88663C8.08877 9.94911 8.1625 9.99871 8.24374 10.0326C8.32498 10.0664 8.41212 10.0838 8.50013 10.0838C8.58814 10.0838 8.67527 10.0664 8.75651 10.0326C8.83775 9.99871 8.91149 9.94911 8.97346 9.88663L11.8335 7.05996C11.8959 6.99799 11.9455 6.92425 11.9794 6.84301C12.0132 6.76177 12.0307 6.67464 12.0307 6.58663C12.0307 6.49862 12.0132 6.41148 11.9794 6.33024C11.9455 6.249 11.8959 6.17527 11.8335 6.1133Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const DateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
        fill="#6F6D7B"
      />
    </svg>
  );
};
export const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7105 12.7099C16.6909 11.9385 17.4065 10.8808 17.7577 9.68382C18.109 8.48684 18.0784 7.21015 17.6703 6.03135C17.2621 4.85255 16.4967 3.83027 15.4806 3.10674C14.4644 2.3832 13.2479 1.99438 12.0005 1.99438C10.753 1.99438 9.5366 2.3832 8.52041 3.10674C7.50423 3.83027 6.73883 4.85255 6.3307 6.03135C5.92257 7.21015 5.892 8.48684 6.24325 9.68382C6.59449 10.8808 7.31009 11.9385 8.29048 12.7099C6.61056 13.3829 5.14477 14.4992 4.04938 15.9398C2.95398 17.3804 2.27005 19.0912 2.07048 20.8899C2.05604 21.0212 2.0676 21.1541 2.10451 21.2809C2.14142 21.4078 2.20295 21.5261 2.2856 21.6292C2.4525 21.8374 2.69527 21.9707 2.96049 21.9999C3.2257 22.0291 3.49164 21.9517 3.69981 21.7848C3.90798 21.6179 4.04131 21.3751 4.07049 21.1099C4.29007 19.1551 5.22217 17.3497 6.6887 16.0387C8.15524 14.7277 10.0534 14.0029 12.0205 14.0029C13.9876 14.0029 15.8857 14.7277 17.3523 16.0387C18.8188 17.3497 19.7509 19.1551 19.9705 21.1099C19.9977 21.3556 20.1149 21.5825 20.2996 21.7469C20.4843 21.9113 20.7233 22.0014 20.9705 21.9999H21.0805C21.3426 21.9697 21.5822 21.8372 21.747 21.6311C21.9119 21.4251 21.9886 21.1622 21.9605 20.8999C21.76 19.0961 21.0724 17.3809 19.9713 15.9381C18.8703 14.4953 17.3974 13.3794 15.7105 12.7099ZM12.0005 11.9999C11.2094 11.9999 10.436 11.7653 9.7782 11.3258C9.12041 10.8862 8.60772 10.2615 8.30497 9.53061C8.00222 8.79971 7.923 7.99544 8.07734 7.21952C8.23168 6.4436 8.61265 5.73086 9.17206 5.17145C9.73147 4.61204 10.4442 4.23108 11.2201 4.07674C11.996 3.9224 12.8003 4.00161 13.5312 4.30436C14.2621 4.60711 14.8868 5.1198 15.3264 5.7776C15.7659 6.4354 16.0005 7.20876 16.0005 7.99988C16.0005 9.06075 15.5791 10.0782 14.8289 10.8283C14.0788 11.5785 13.0614 11.9999 12.0005 11.9999Z"
        fill="#6F6D7B"
      />
    </svg>
  );
};
export const DataStorage = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33366 10.9999C5.2018 10.9999 5.07291 11.039 4.96328 11.1123C4.85365 11.1855 4.7682 11.2896 4.71774 11.4115C4.66728 11.5333 4.65408 11.6673 4.6798 11.7966C4.70553 11.926 4.76902 12.0448 4.86225 12.138C4.95549 12.2312 5.07428 12.2947 5.2036 12.3204C5.33292 12.3462 5.46696 12.333 5.58878 12.2825C5.7106 12.232 5.81472 12.1466 5.88797 12.037C5.96123 11.9273 6.00033 11.7984 6.00033 11.6666C6.00033 11.4898 5.93009 11.3202 5.80506 11.1952C5.68004 11.0702 5.51047 10.9999 5.33366 10.9999ZM8.00033 1.33325C5.33366 1.33325 2.66699 2.24659 2.66699 3.99992V11.9999C2.66699 13.7533 5.33366 14.6666 8.00033 14.6666C10.667 14.6666 13.3337 13.7533 13.3337 11.9999V3.99992C13.3337 2.24659 10.667 1.33325 8.00033 1.33325ZM12.0003 11.9999C12.0003 12.4733 10.4803 13.3333 8.00033 13.3333C5.52033 13.3333 4.00033 12.4733 4.00033 11.9999V9.81992C5.24837 10.4132 6.61892 10.7033 8.00033 10.6666C9.38173 10.7033 10.7523 10.4132 12.0003 9.81992V11.9999ZM12.0003 7.99992C12.0003 8.47325 10.4803 9.33325 8.00033 9.33325C5.52033 9.33325 4.00033 8.47325 4.00033 7.99992V5.81992C5.24837 6.41322 6.61892 6.70332 8.00033 6.66659C9.38173 6.70332 10.7523 6.41322 12.0003 5.81992V7.99992ZM8.00033 5.33325C5.52033 5.33325 4.00033 4.47325 4.00033 3.99992C4.00033 3.52659 5.52033 2.66659 8.00033 2.66659C10.4803 2.66659 12.0003 3.52659 12.0003 3.99992C12.0003 4.47325 10.4803 5.33325 8.00033 5.33325ZM5.33366 6.99992C5.2018 6.99992 5.07291 7.03902 4.96328 7.11227C4.85365 7.18553 4.7682 7.28965 4.71774 7.41146C4.66728 7.53328 4.65408 7.66733 4.6798 7.79665C4.70553 7.92597 4.76902 8.04475 4.86225 8.13799C4.95549 8.23123 5.07428 8.29472 5.2036 8.32044C5.33292 8.34617 5.46696 8.33296 5.58878 8.28251C5.7106 8.23205 5.81472 8.1466 5.88797 8.03697C5.96123 7.92733 6.00033 7.79844 6.00033 7.66659C6.00033 7.48977 5.93009 7.32021 5.80506 7.19518C5.68004 7.07016 5.51047 6.99992 5.33366 6.99992Z"
        fill="#312E43"
      />
    </svg>
  );
};
export const DocumentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 12C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H9ZM20 8.94C19.9896 8.84813 19.9695 8.75763 19.94 8.67V8.58C19.8919 8.47718 19.8278 8.38267 19.75 8.3L13.75 2.3C13.6673 2.22222 13.5728 2.15808 13.47 2.11C13.4402 2.10576 13.4099 2.10576 13.38 2.11C13.2784 2.05174 13.1662 2.01434 13.05 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V9C20 9 20 9 20 8.94ZM14 5.41L16.59 8H15C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7V5.41ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H12V7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10H18V19ZM15 16H9C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17C16 16.7348 15.8946 16.4804 15.7071 16.2929C15.5196 16.1054 15.2652 16 15 16Z"
        fill="#9897A1"
      />
    </svg>
  );
};
export const VrDevider = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="2"
      height="156"
      viewBox="0 0 2 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="0.999993"
        y2="155"
        stroke="#EAEAEC"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};