module.exports = {
    extends: ["stylelint-config-standard"],
    rules: {
      "indentation": null,
      "no-eol-whitespace": null,
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen",
            "layer"
          ],
        },
      ],
      "declaration-block-trailing-semicolon": null,
      "no-descending-specificity": null,
    },
  };