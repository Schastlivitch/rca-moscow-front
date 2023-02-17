import React, { ReactNode } from "react";
import joinClassNames from "../../Utils/joinClassNames";
import "./Panel.css";

interface IPanelProps {
  className?: string;
  title?: string;
  children?: string | ReactNode;
  TitleBarRightComponent?: string | ReactNode;
  TitleBarLeftComponent?: string | ReactNode;
}
const Panel: React.FC<IPanelProps> = ({
  className,
  title,
  children,
  TitleBarRightComponent,
  TitleBarLeftComponent,
}) => {
  return (
    <div className={joinClassNames(["panel", className])}>
      {title || TitleBarLeftComponent || TitleBarRightComponent ? (
        <div className="panel__title_bar">
          {title && !TitleBarLeftComponent ? (
            <h2 className="panel__title">{title}</h2>
          ) : null}
          {title && TitleBarLeftComponent ? (
            <div className="panel__title_bar_group_left">
              <div className="panel__title_left">{TitleBarLeftComponent}</div>

              {title ? <h2 className="panel__title">{title}</h2> : null}
            </div>
          ) : null}

          <div className="panel__title_right">{TitleBarRightComponent}</div>
        </div>
      ) : null}
      <div className="panel__body">{children}</div>
    </div>
  );
};

export default Panel;
