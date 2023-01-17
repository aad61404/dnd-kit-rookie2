import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props: any) {
  console.log("🚀 ~ file: SortableItem.tsx:6 ~ SortableItem ~ props", props)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
    console.log("🚀 ~ file: SortableItem.tsx:13 ~ SortableItem ~ transition", transition)
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div style={style} ref={setNodeRef} {...attributes}{...listeners}>
      <div>----- {props.id} -----</div>
    </div>
  );
}

export default SortableItem;
