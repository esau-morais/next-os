const Logo = () => {
  return (
    <svg
      className='animate-[spin_1.5s_ease-in-out]'
      width={84}
      height={84}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={84} height={84} rx={42} fill="#01070E" />
      <path
        d="M27.3 47.25h18.463M32.464 29.642 38.17 47.2M50.806 29.113 35.87 39.965M56.978 46.392 42.042 35.541M42.45 57.603l5.706-17.56"
        stroke="#EDF0F6"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.904 60.517v.022M58.074 54.809v.022M62.024 46.566v.023M62.024 37.434v.022M58.074 29.191v.023M50.904 23.483v.023M42 21.451v.023M33.096 23.483v.023M25.926 29.191v.023M21.976 37.434v.022M21.976 46.566v.023M25.926 54.809v.022M33.096 60.517v.022M42 62.549v.022"
        stroke="#EDF0F6"
        strokeWidth={4.566}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Logo
