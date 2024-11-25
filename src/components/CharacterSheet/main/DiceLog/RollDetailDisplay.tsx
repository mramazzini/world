import Tooltip from '@/Utility/Tooltip';
interface RollDetailsDisplayProps {
  rollDetails: PrismaJson.RollDetail[];
}

const RollDetailsDisplay = ({ rollDetails }: RollDetailsDisplayProps) => {
  return (
    <Tooltip
      element={<span className="badge badge-primary">Details</span>}
      additionalContent={
        <div className="bg-base-200 text-base-content">
          <table className="table table-zebra table-xs mt-2 rounded-xl">
            <thead>
              <tr className="bg-black/30">
                <th>Dice Type</th>
                <th>Rolls</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {rollDetails.map((roll, index) => (
                <tr key={index}>
                  <td>{roll.diceType}</td>
                  <td>{roll.rolled.join(', ')}</td>
                  <td>{roll.rolled.reduce((acc, curr) => acc + curr, 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    ></Tooltip>
  );
};

export default RollDetailsDisplay;
