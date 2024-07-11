//Recursivly goes through the children of the component and wraps the text nodes in a FormatAndSanitize component
import FormatAndSanitize from "./FormatAndSanitize";
import React, { Children, use } from "react";
function TextWrapper({
  children,
}: {
  children: React.ReactElement;
}): React.ReactNode {
  console.log(children);

  try {
    console.log(typeof children);
    // if (typeof children === "string") {
    //   console.log("sanitizing", children);
    //   return FormatAndSanitize({ str: children });
    // }
    // // if (Array.isArray(children)) {
    // //   return children.map((child) => TextWrapper({ children: child }));
    // // }
    if (Array.isArray(children)) {
      console.log("array", children);
      return;
      //return children.map((child) => TextWrapper({ children: child }));
    }
    if (typeof children === "string") {
      console.log("sanitizing", children);
      return FormatAndSanitize(children);
    }
    if (typeof children === "object" && children !== null) {
      console.log(
        Children.map(children, (child: React.ReactElement) =>
          TextWrapper({ children: child.props.children })
        )
      );
    }
  } catch (error) {
    console.error(error);
  }

  return children;
}
// export default TextWrapper;
