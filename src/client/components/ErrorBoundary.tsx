import React from "react";

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props); // props로 errorFallback을 받을 수 있음
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    console.error("getDerivedStateFromError");
    return { error };
  }

  componentDidCatch(err, info) {
    console.error("componentDidCatch", err, info);
    this.setState({
      error: err,
    });
  }

  render() {
    const { fallback, children } = this.props;
    const { error } = this.state;
    if (error) {
      return fallback ?? <h3>에러가 발생했습니다 :(</h3>;
    }
    return children;
  }
}

export default ErrorBoundary;

interface IErrorBoundaryProps {
  children: JSX.Element;
  fallback: JSX.Element;
}

interface IErrorBoundaryState {
  error: Error | null;
}
