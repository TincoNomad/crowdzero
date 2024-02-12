import stylePrice from "./calculations/stylePrice";

export default function RaisedBar({
  raised,
  goal
}: {
  raised: number;
  goal: number;
}) {
  const percentage = Math.round((raised / goal) * 100);
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="flex flex-col w-full gap-1">
        <span>
          {percentage}%
        </span>
        <div className="bg-dark w-full h-[15px] rounded-full">
          <div className='bg-[#1A83CF] h-full rounded-full' style={{
            width: `${percentage}%`
          }} />
        </div>
      </div>
      <div className="flex flex-col">
        <span>Raised:</span>
        <span className="bg-primary-gradient-reverted bg-clip-text text-transparent font-bold">{stylePrice(raised)}</span>
      </div>
    </div>
  )
}