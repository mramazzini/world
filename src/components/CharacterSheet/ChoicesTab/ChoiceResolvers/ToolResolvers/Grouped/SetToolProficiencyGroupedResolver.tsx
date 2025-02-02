import { getToolsByGroup } from '@/lib/actions/db/tool/read.actions';
import { SetToolProficiencyGroupedParams } from '@/lib/types/protocols';
import { ToolID } from '@/lib/types/types';
import ModelDisplay from '@/Utility/ModelDisplay';
import { Choice } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import ChoiceResolverButton from '../../../ChoiceResolverButton';
import { useAppSelector } from '@/store/hooks';

const SetToolProficiencyGroupedResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as SetToolProficiencyGroupedParams;
  const { proficientToolIds: toolIds } = useAppSelector((state) => state.sheet);
  const [selectedTools, setSelectedTools] = useState<ToolID[]>([]);
  const [fetchedTools, setFetchedTools] = useState<ToolID[]>([]);
  useEffect(() => {
    const getTools = async () => {
      const ids: ToolID[] = [];
      for (const toolInput of params) {
        if (toolInput.type === 'id' && toolInput.id) {
          ids.push(toolInput.id);
        } else if (toolInput.type === 'group' && toolInput.group) {
          const tools = await getToolsByGroup(toolInput.group);
          if (!tools) continue;
          for (const tool of tools) {
            ids.push(tool.id);
          }
        }
      }
      setFetchedTools(ids);
    };

    getTools();
  }, [params]);

  const filteredTools = useMemo(
    () => fetchedTools.filter((t) => !toolIds.includes(t)),
    [fetchedTools, toolIds]
  );

  const alreadyChosen = useMemo(
    () => fetchedTools.filter((t) => toolIds.includes(t)),
    [fetchedTools, toolIds]
  );

  return (
    <div>
      <h3>Set Tool Proficiency</h3>
      {choice.amountOfOptionToChoose === 1 ? (
        <p>Choose a tool to be proficient in.</p>
      ) : (
        <p>Choose {choice.amountOfOptionToChoose} tools to be proficient in.</p>
      )}
      <div className="divider"></div>
      <ul className="flex flex-col gap-2">
        {filteredTools.map((t) => (
          <li key={t} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={t}
              className="checkbox "
              disabled={
                selectedTools.length >= choice.amountOfOptionToChoose &&
                !selectedTools.includes(t)
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedTools([...selectedTools, t]);
                } else {
                  setSelectedTools(selectedTools.filter((s) => s !== t));
                }
              }}
              checked={selectedTools.includes(t)}
            />
            <label htmlFor={t}>
              <ModelDisplay model="Tool" id={t} />
            </label>
          </li>
        ))}
        {alreadyChosen.map((p) => (
          <li key={p} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={p}
              className="checkbox checkbox-disabled"
              disabled
            />
            <label htmlFor={p} className="text-neutral">
              <ModelDisplay model="Tool" id={p} />
              (Already Proficient)
            </label>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h3>Current Proficiencies</h3>
          <ul className="list-disc ml-4">
            {toolIds.map((p) => (
              <li key={p}>
                <ModelDisplay model="Tool" id={p} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3>After Selections</h3>
          <ul>
            {toolIds.map((p) => (
              <li key={p} className="list-disc ml-4">
                <ModelDisplay model="Tool" id={p} />
              </li>
            ))}
            {selectedTools.map((p) => (
              <li key={p}>
                <span className="font-bold">+</span>{' '}
                <ModelDisplay model="Tool" id={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selectedTools}
        disabled={selectedTools.length !== choice.amountOfOptionToChoose}
      />
    </div>
  );
};

export default SetToolProficiencyGroupedResolver;
