/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
USE_PASSAGE: 'push-plus',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc1c4e523e75e7f16',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '480edadc330cc495f955b2b846934a47',

  PROVINCE: '北京',
  CITY: '海淀',

  USERS: [
    {
      // 想要发送的人的名字
      name: '李佳音',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '2fbecf206d0a4aea837d9fad1d6bbc8e',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-31',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '李佳音', year: '2004', date: '07-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李佳音', year: '2004', date: '08-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '08-31',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-31' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wNHsHpIo-dNEq3s7V7gz-F3ipoRPUMvMpzofsIr--o8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_ZSp6EIVs2LBBhmnBleCnxOHZAM',
    }
  ],

}

module.exports = USER_CONFIG

