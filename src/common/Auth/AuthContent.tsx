const AuthContent = ({ onSubmit, children }) => (
  <>
  <form onSubmit={onSubmit}>
    {children}
  </form>
  </>
);

export default AuthContent;