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

get.rems = (value = 1) => String(value * 0.0625 + "rem");

export default get;
