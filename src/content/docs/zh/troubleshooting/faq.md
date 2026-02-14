# 常见问题

> 更新时间：2024-02-13

## 安装相关

### Q: macOS 提示"无法验证开发者"怎么办？

A: 打开"系统偏好设置" > "安全性与隐私" > "通用"，点击"仍要打开"。

### Q: macOS 提示"App is damaged and can't be opened"怎么办？

A: 执行以下命令移除隔离属性：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/霖君.app"
```

### Q: 支持哪些操作系统？

A: macOS 12+、Windows 10+、Linux（支持 AppImage 和 deb 包）。

## 提供商相关

### Q: 支持哪些 AI 提供商？

A: 霖君支持 10+ 提供商：

- **OAuth 认证**：Claude Code、Gemini CLI、OpenAI Codex、Qwen Code、Antigravity、iFlow、GitHub Copilot、Kiro
- **API Key 认证**：Custom Provider、AmpCode

### Q: OAuth 登录失败怎么办？

A: 检查网络连接，确保浏览器没有阻止弹窗，尝试清除浏览器缓存后重试。

### Q: 自定义提供商如何配置？

A: 参考 [自定义提供商](../providers/custom-providers) 文档。

### Q: Token 存储在哪里？

A: Token 存储在 `~/.cli-proxy-api/` 目录下的 JSON 文件中。

## 代理相关

### Q: 默认代理端口是多少？

A: 默认端口是 **8310**。可以在设置中修改。

### Q: 代理无法启动怎么办？

A: 检查端口 8310 是否被占用，尝试更换端口。查看日志获取详细错误信息。

### Q: 如何更改代理端口？

A: 在 **Settings** 页面修改代理端口配置。

### Q: 代理和应用的区别是什么？

A: 霖君应用是用户界面，CLIProxyAPIPlus 代理是实际处理 API 请求的后台服务。

### Q: 支持哪些 CLI 工具？

A: 霖君可以自动配置以下 CLI 工具：

- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode
- Amp CLI
- Droid CLI
- iFlow CLI

## 更新相关

### Q: 如何检查更新？

A: 在 **About** 页面点击"检查更新"按钮。

### Q: 有哪些组件需要更新？

A: 两个组件：

1. **应用本体**：霖君桌面应用
2. **代理二进制**：CLIProxyAPIPlus 代理程序

## 数据相关

### Q: 数据存储在哪里？

A:

- **Token**：`~/.cli-proxy-api/`
- **应用配置**：系统用户数据目录

### Q: 如何备份数据？

A: 复制 `~/.cli-proxy-api/` 目录即可备份 Token 数据。

### Q: 如何清除所有数据？

A: 关闭应用，删除 `~/.cli-proxy-api/` 目录和应用配置目录，重新启动。

## 获取帮助

如果以上方案无法解决问题：

1. 查看 [常见错误](./common-errors)
2. 在 [GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues) 提交问题
3. 附上系统信息和错误日志
