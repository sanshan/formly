import {Config} from "../interfaces";

export const CHART_CONFIG: Config = {
  schema: {
    "title": "Настройки чарта",
    "type": "object",
    "properties": {
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
                    "type": "position",
                    "title": "Положение"
                  },
                  "contentAlign": {
                    "type": "h-align",
                    "title": "Выравнивание(гор.)"
                  },
                  "valign": {
                    "type": "v-align",
                    "title": "Выравнивание(вер.)"
                  }
                }
              }
            ]
          }
        }
      },
      "numberFormatter": {
        "title": "Формат чисел",
        "type": "object",
        "properties": {
          "numberFormat": {
            "type": "numberFormat",
            "title": "После запятой",
          }
        },
      },
      titles: {
        "title": "Заголовки чарта",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "text": {
              "type": 'string',
              "title": "Текст"
            },
            "marginBottom": {
              "type": 'string',
              "title": "Отступ снизу"
            },
            "align": {
              "type": "h-align",
              "title": "Выравнивание(гор.)"
            }
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
    "data": [
      {
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
      }
    ],

    "legend": {
      disabled: false,
      position: 'bottom',
      contentAlign: 'center',
      valign: 'middle'
    },

    "titles": [
      {
        text: 'Заголовок чарта',
      }
    ],

    numberFormatter: {
      numberFormat: '#.'
    }

  }
}




