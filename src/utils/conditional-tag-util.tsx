import { Tag } from "../enums/tag";
export const returnTag = (tag: Tag, children: React.ReactNode) => {
  switch (tag) {
    case Tag.h1:
      return <h1>{children}</h1>;
    case Tag.h2:
      return <h2>{children}</h2>;
    case Tag.h3:
      return <h3>{children}</h3>;
    case Tag.h4:
      return <h4>{children}</h4>;
    case Tag.p:
      return <p>{children}</p>;
  }
};
