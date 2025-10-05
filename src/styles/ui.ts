export const styles = {
  input: {
    base: "w-full px-3.5 py-2.5 rounded-lg border transition-all font-mono text-sm bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
    valid:
      "border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900",
    error:
      "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900",
  },

  label:
    "text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide",

  errorText: "text-xs text-red-600 dark:text-red-400 flex items-center gap-1",

  button: {
    base: "w-full px-4 py-3 rounded-lg font-medium text-sm text-white shadow-md transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg active:scale-95",
    disabled:
      "disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:shadow-none",
    secondary:
      "px-3 py-1.5 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
  },

  card: {
    base: "w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm",
    background:
      "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black",
    padding: "p-6",
  },

  alert: {
    error:
      "p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800",
    errorText: "text-sm text-red-700 dark:text-red-300 break-words",
  },

  text: {
    heading: "text-lg font-semibold text-gray-800 dark:text-gray-100",
    subheading: "text-gray-700 dark:text-gray-200 font-medium",
    body: "text-sm text-gray-600 dark:text-gray-300",
    mono: "font-mono",
  },

  link: "text-blue-600 dark:text-blue-400 hover:underline",

  status: {
    success: "text-green-600 dark:text-green-400",
    pending: "text-yellow-600 dark:text-yellow-400",
    fail: "text-red-600 dark:text-red-400",
  },
} as const;

export const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");
