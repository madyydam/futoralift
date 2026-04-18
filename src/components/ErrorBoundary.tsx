import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-midnight text-offwhite flex items-center justify-center p-6 font-inter">
          <div className="max-w-md w-full bg-charcoal/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 bg-phoenix1/10 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-phoenix1" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-poppins font-bold tracking-tight">Something went wrong</h2>
              <p className="text-muted-foreground text-sm">
                The application encountered an unexpected error. We've been notified and are working on it.
              </p>
            </div>
            <Button 
              onClick={this.handleReset}
              className="bg-phoenix1 hover:bg-phoenix2 text-white w-full gap-2 shadow-lg shadow-phoenix1/20 transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
