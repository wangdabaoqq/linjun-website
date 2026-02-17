// Auto-generated from GitHub Releases. Do not edit manually.
// Run: node scripts/fetch-releases.mjs

export type Release = {
  tag: string;
  name: string;
  body: string;
  date: string;
  prerelease: boolean;
  url: string;
};

export const releases: Release[] = [
  {
    "tag": "v1.0.6",
    "name": "v1.0.6",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n- [fix] \u4f18\u5316gemini cli oauth \u6388\u6743 \u589e\u52a0\u9879\u76eeid \u53ef\u9009\u9879 #9\n- [fix] \u4fee\u590d oauth \u6388\u6743windows \u4e0b\u76ee\u5f55\u751f\u6210\u9519\u8bef\uff0c\u65e0\u6cd5\u6388\u6743\u95ee\u9898 #8\n- [feat] \u589e\u52a0\u591a\u8d26\u6237\u6388\u6743\u540e\u662f\u5426\u542f\u52a8\u67d0\u8d26\u6237\u529f\u80fd\n- [feat] \u914d\u7f6e\u591a\u4e2a\u63d0\u4f9b\u5546\u662f\u5141\u8bb8\u4f7f\u7528\u4e0e\u7981\u7528\uff0c\u5982\u5b58\u5728\u914d\u7f6e\u4e86\u81ea\u5b9a\u4e49\u63d0\u4f9b\u5546\u6ca1\u6709\u989d\u5ea6\n- [feat] \u589e\u52a0 iFlow CLI\u3001Droid CLI\u3001Amp CLI \u4ee3\u7406\u914d\u7f6e\n- [syle] \u4f18\u5316\u90e8\u5206\u9875\u9762 \u6837\u5f0f\u4e0e\u5e03\u5c40\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.5...v1.0.6",
    "date": "2025-02-12T08:22:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.6"
  },
  {
    "tag": "v1.0.5-beta.4",
    "name": "v1.0.5-beta.4",
    "body": "**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.5-beta.2...v1.0.5-beta.4",
    "date": "2025-02-10T09:17:00Z",
    "prerelease": true,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.5-beta.4"
  },
  {
    "tag": "v1.0.5-beta.3",
    "name": "v1.0.5-beta.3",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n- [fix] \u4fee\u590dkiro \u6388\u6743token\u7eed\u671f\u95ee\u9898 #7\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.5-beta.2...v1.0.5.beta-3",
    "date": "2025-02-10T01:36:00Z",
    "prerelease": true,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.5-beta.3"
  },
  {
    "tag": "v1.0.5-beta.2",
    "name": "v1.0.5-beta.2",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n- [fix] \u4fee\u590dmacos arm \u6784\u5efa\u635f\u574f\u95ee\u9898 #4\n- [feat] \u589e\u5f3amacos \u4e0ewindows\u6258\u76d8\u7a97\u53e3\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.5-beta.1...v1.0.5-beta.2",
    "date": "2025-02-05T19:24:00Z",
    "prerelease": true,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.5-beta.2"
  },
  {
    "tag": "v1.0.5-beta.1",
    "name": "v1.0.5-beta.1",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n- [\u91cd\u6784] \u81ea\u5b9a\u4e49\u63d0\u4f9b\u5546\u529f\u80fd\u91cd\u6784\n- [ \u529f\u80fd] \u65b0\u589eApp\u5f15\u5bfc\u9875\n- [\u4fee\u590d] \u4fee\u590dchat-completions\u65e5\u5fd7\u67e5\u770b #1\n- [\u4f18\u5316] App \u6574\u4f53\u9875\u9762\u6df1\u5ea6\u4f18\u5316\u63d0\u5347\u7528\u6237\u4f53\u9a8c #2\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.5...v1.0.5-beta.1",
    "date": "2025-02-05T05:04:00Z",
    "prerelease": true,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.5-beta.1"
  },
  {
    "tag": "v1.0.5",
    "name": "v1.0.5",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.4...v1.0.5",
    "date": "2025-02-03T17:21:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.5"
  },
  {
    "tag": "v1.0.4",
    "name": "v1.0.4",
    "body": "\u26a0\ufe0f macOS \u63d0\u793a\"\u5e94\u7528\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6253\u5f00\"\uff1f\n`sudo xattr -rd com.apple.quarantine \"/Applications/\u9716\u541b.app\"`\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.3...v1.0.4",
    "date": "2025-02-02T07:03:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.4"
  },
  {
    "tag": "v1.0.3",
    "name": "\u9716\u541b v1.0.3-\u6c34\u5929\u4e00\u8272",
    "body": "**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.2...v1.0.3",
    "date": "2025-02-02T06:34:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.3"
  },
  {
    "tag": "v1.0.2",
    "name": "\u9716\u541b v1.0.2-\u6c34\u5929\u4e00\u8272",
    "body": "**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.1...v1.0.2",
    "date": "2025-02-01T22:50:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.2"
  },
  {
    "tag": "v1.0.1",
    "name": "\u9716\u541b v1.0.1-\u6c34\u5929\u4e00\u8272",
    "body": "xattr -cr /Applications/\u9716\u541b.app\n\n**Full Changelog**: https://github.com/wangdabaoqq/LinJun/compare/v1.0.0...v1.0.1",
    "date": "2025-02-01T20:26:00Z",
    "prerelease": false,
    "url": "https://github.com/wangdabaoqq/LinJun/releases/tag/v1.0.1"
  }
];
