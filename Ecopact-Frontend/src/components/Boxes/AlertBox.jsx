

const AlertBox = ({alertToggled}) => {
  return (
    <div className={` absolute top-0 right-[193px] w-44 py-2 opacity-${alertToggled ? '100' : '0'} transition-all   bg-yellow-300 `}>Alert</div>
  )
}

export default AlertBox
