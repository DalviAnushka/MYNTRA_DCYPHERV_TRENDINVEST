import React from "react";

const Link = ({ className, href, children, onClick }) => {
  const onClickHandler = (event) => {
    // Handle the case where the user holds down a modifier key
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    // Tell the rest of the app that the URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    // Call the passed in onClick function
    if (onClick) {
      onClick();
    }
  };

  return (
    <a className={className} href={href} onClick={onClickHandler}>
      {children}
    </a>
  );
};

export default Link;
