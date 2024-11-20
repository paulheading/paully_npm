let get = {};

get.StaticPaths = function (data) {
  const paths = data.map(function (project) {
    return {
      params: {
        path: project.local.pathname,
      },
      props: {
        ...project,
      },
    };
  });

  return paths;
};

/**
 * @name toRems
 * @prop {Number} value
 * @returns {String}
 */

get.rems = function (value = 1) {
  return String(value * 0.0625 + "rem");
};

export default { get };
