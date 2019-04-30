declare module 'exec-root' {
    function exec (command: string, opts: any, callback?: (error: Error, stdout: string, stderr: string) => void): any

    namespace exec {
        function __promisify__(command: string, opts: any): Promise<{ stdout: string, stderr: string }>;
    }
}