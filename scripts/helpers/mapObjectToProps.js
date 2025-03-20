export default function ({ label = "data", data, props }) {
  if (!data) return props;

  if (typeof data == "string") return { ...props, data };

  let entries = {};

  let prefixEntry = ([key, val]) => (entries[label + "_" + key] = val);

  Object.entries(data).forEach(prefixEntry);

  return { ...props, ...entries };
}
