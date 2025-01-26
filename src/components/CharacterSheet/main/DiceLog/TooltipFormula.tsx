import useDiceRoller, { DiceCommand } from '@/hooks/useDiceRoller';
import FormulaDictionary from '@/Utility/FormulaDictionary';
import Tooltip from '@/Utility/Tooltip';
import { useEffect, useState } from 'react';

const ToolTipFormula = ({ formula }: { formula: string }) => {
  const { getTokensFromFormula } = useDiceRoller();
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState<{ text: string; value?: number }[]>([]);

  useEffect(() => {
    setLoading(true);
    getTokensFromFormula(formula).then((tokens) => {
      setTokens(tokens);
      setLoading(false);
    });
  }, [formula, getTokensFromFormula]);

  return (
    <span className="pointer-events-auto">
      {loading && <span>Loading...</span>}
      {tokens.map((token, index) =>
        token.value !== undefined ? (
          <Tooltip
            key={index}
            element={token.text}
            title={FormulaDictionary[token.text as DiceCommand]?.title}
            additionalContent={
              <p className="text-base-content">
                Current value:{' '}
                <span className="font-bolder">
                  {token.value >= 0
                    ? `+ ${token.value}`
                    : `- ${Math.abs(token.value)}`}
                </span>
              </p>
            }
          >
            {FormulaDictionary[token.text as DiceCommand]?.description}
          </Tooltip>
        ) : (
          <span key={index}>{token.text}</span>
        )
      )}
    </span>
  );
};

export default ToolTipFormula;
