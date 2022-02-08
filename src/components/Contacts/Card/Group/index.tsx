import { H2, OverflowedParagraph } from "../../../../styles/styles";

export const Group: React.FC<{ group?: string[] }> = ({ group }) => {
    
    console.info(group)

    if(!group || !group.length){
       return (
       <H2>Grupos</H2>
       )
    }
    return (
    <>
      <H2>Grupos</H2>;
    <OverflowedParagraph>{group.join(", ")}</OverflowedParagraph>
    </>
  );
};
