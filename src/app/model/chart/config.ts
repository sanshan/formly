import {Config} from "../interfaces";
import {Legend} from "@amcharts/amcharts4/charts";

export const CHART_CONFIG: Config = {
  tabs: [
    {
      label: 'Общие параметры',
      icon: 'cogs',
      description: 'Общие параметры',
      fields: [
        {
          key: 'innerRadius',
          type: 'slider',
          templateOptions: {
            label: 'Внутренний радиус',
            description: 'Действует только на круговые диаграммы',
            min: 0,
            max: 100
          }
        },
        {
          key: 'legend',
          wrappers: ['mat-expansion-panel'],
          templateOptions: {
            label: 'Легенда',
            description: 'параметры',
            attributes: {
              icon: 'camera-control',
              faq: 'Общие параметры для легенды'
            }
          },
          fieldGroup: [
            {
              key: 'disabled',
              type: 'boolean',
              templateOptions: {
                label: 'Выключить легенду'
              }
            },
            {
              key: 'position',
              type: 'position',
              templateOptions: {
                label: 'Положение'
              },
              hideExpression: (legend: Legend) => {
                return legend.disabled;
              }
            },
            {
              key: 'contentAlign',
              type: 'h-align',
              templateOptions: {
                label: 'Выравнивание(гор.)'
              },
              hideExpression: (legend: Legend) => {
                return legend.disabled;
              }
            },
            {
              key: 'valign',
              type: 'v-align',
              templateOptions: {
                label: 'Выравнивание(вер.)'
              },
              hideExpression: (legend: Legend) => {
                return legend.disabled;
              }
            }
          ]
        },
        {
          key: 'numberFormatter',
          wrappers: ['mat-expansion-panel'],
          templateOptions: {
            label: 'Формат чисел',
            description: 'параметры',
            attributes: {
              icon: 'decimal-comma-increase',
              faq: 'Параметры фарматирования чисел'
            }
          },
          fieldGroup: [
            {
              key: 'numberFormat',
              type: 'numberFormat',
              templateOptions: {
                label: 'После запятой'
              }
            }
          ]
        },
        {
          key: 'titles',
          wrappers: ['mat-expansion-panel'],
          type: 'array',
          templateOptions: {
            label: 'Заголовки',
            description: 'параметры',
            attributes: {
              icon: 'format-title',
              faq: 'Параметры заголовка'
            }
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'text',
                type: 'string',
                templateOptions: {
                  label: 'Текст заголовка'
                }
              },
              {
                key: 'marginBottom',
                type: 'string',
                templateOptions: {
                  label: 'Нижний отступ'
                }
              },
              {
                key: 'marginTop',
                type: 'string',
                templateOptions: {
                  label: 'Верхний отступ'
                }
              },
              {
                key: 'align',
                type: 'h-align',
                templateOptions: {
                  label: 'Выравнивание'
                }
              }
            ]
          }
        },

      ]
    },
    {
      label: 'Серии',
      icon: 'chart-arc',
      description: 'Управление сериями',
      fields: [
        {
          key: 'series',
          wrappers: ['mat-expansion-panel'],
          type: 'array',
          templateOptions: {
            label: 'Серии',
            description: 'параметры',
            attributes: {
              icon: 'chart-arc'
            }
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'startAngle',
                type: 'slider',
                templateOptions: {
                  label: 'Угол',
                  min: 0,
                  max: 360
                }
              }
            ]
          }
        }
      ]
    }
  ],
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
    },

    innerRadius: 20

  }
}
