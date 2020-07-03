import {Config} from "../interfaces";

export const CHART_CONFIG: Config = {
  schema: {
    "title": "Настройки чарта",
    "type": "object",
    "properties": {
      // "startAngle": {
      //   "title": "Начальный угол",
      //   "type": "number"
      // },
      // "endAngle": {
      //   "title": "Конечный угол",
      //   "type": "number"
      // },
      // "innerRadius": {
      //   "title": "Внутренний радиус",
      //   "enum": [
      //     "10%",
      //     "20%",
      //     "30%",
      //     "40%"
      //   ]
      // },
      // "radius": {
      //   "title": "Радиус",
      //   "enum": [
      //     "90%",
      //     "80%",
      //     "70%",
      //     "60%"
      //   ]
      // },
      // "background": {
      //   "type": "object",
      //   "properties": {
      //     "fill": {
      //       "type": "string",
      //       "title": "Цвет фона",
      //     }
      //   }
      // },
      // "numberFormatter": {
      //   "type": "object",
      //   "properties": {
      //     "numberFormat": {
      //       "type": "string",
      //       "title": "Формат чисел",
      //     }
      //   }
      // },
      "legend": {
        "title": "Управление легендой",
        "type": "object",
        "properties": {
          "disabled": {
            "type": "boolean",
            "title": "Выключить легенду",
          }
        },
        "dependencies": {
          "disabled": {
            "oneOf": [
              {
                "properties": {
                  "disabled": {
                    "const": true
                  }
                }
              },
              {
                "properties": {
                  "disabled": {
                    "const": false
                  },
                  "position": {
                    "title": "Положение",
                    "type": 'enum',
                    "enum": [
                      'top', 'bottom'
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    }
  },
  model: {
    // Create pie series
    "series": [{
      "type": "PieSeries",
      "dataFields": {
        "value": "litres",
        "category": "country"
      }
    }],

    // Add data
    "data": [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }],

    // And, for a good measure, let's add a legend
    "legend": {
      disabled: true
    },

    numberFormatter: {
      numberFormat: '#.'
    }

  }
}




