import Loading from '@/components/UI/Loading';
import SidebarSelector from '@/components/UI/SidebarSelector';
import useQueryToolData from '@/hooks/apiHooks/useQueryToolData';
import { memoizeGetTool } from '@/Utility/Indexed/globalCache';
import { useCallback, useMemo, useState } from 'react';

interface ToolSelectorProps {
  onSelect: (id: string, name: string) => void;
  disabled?: boolean;
}

const ToolSelector = ({ onSelect, disabled = false }: ToolSelectorProps) => {
  const { toolData, loading } = useQueryToolData();
  const [show, setShow] = useState(false);

  const filteredData = useMemo(() => {
    return toolData.map((tool) => ({
      id: tool.id,
      name: tool.name,
    }));
  }, [toolData]);

  const handleSelect = useCallback(
    async (id: string | null) => {
      if (id) {
        const tool = await memoizeGetTool({
          query: id,
          type: 'id',
        });
        if (tool) onSelect(tool.id, tool.name);
      }
      setShow(false);
    },
    [onSelect]
  );

  if (loading) return <Loading />;

  return (
    <>
      <button
        disabled={disabled}
        className={`btn btn-ghost border-gray-500`}
        onClick={() => setShow(true)}
      >
        Select Tool
      </button>
      <SidebarSelector
        data={filteredData}
        show={show}
        onSelect={handleSelect}
        description="Pick a tool"
      />
    </>
  );
};

export default ToolSelector;
