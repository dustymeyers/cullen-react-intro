/**
 * HelloCullen is a component
 *
 * Components are functions
 * that return JSX ("HTML-ish" code)
 *
 * Conventions:
 * - Components are PascalCase'd
 * - One component per file
 */

// this is a component
function HelloCullen() {
  return (
    // JSX fragment!
    // An element with no name
    // Must be used if we want to return more than one element
    <>
      <h1>Hello Cullen!</h1>
      <h2>How you doing?!</h2>
    </>
  );
}

// In Node, we'd do:
// module.exports = HelloCullen;

// Client side (react) we do this instead;
export default HelloCullen;
