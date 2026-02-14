# 配置 CLI 代理

> 适用版本：v1.0.0+
> 更新时间：2024-02-13

## 你将完成

- 配置 CLI 工具使用霖君代理
- 验证配置是否生效

## 前置条件

- 霖君已安装并运行
- 至少添加了一个提供商账号
- 代理服务已启动

## 操作步骤

### 1. 进入 Agents 页面

点击左侧菜单 **Agents**，查看检测到的 CLI 工具列表。

### 2. 选择工具

在列表中找到你要配置的 CLI 工具。每个工具会显示：

- 工具名称和图标
- 当前配置状态（已配置/未配置）
- 检测到的安装路径

### 3. 配置代理

点击工具旁的 **Configure** 按钮：

- 霖君会自动修改工具的配置文件
- 将 API 端点设置为霖君代理地址
- 配置完成后显示成功提示

### 4. 验证配置

配置完成后，在终端中运行 CLI 工具：

```bash
# 示例：Claude Code
claude --version

# 示例：运行一个简单请求
claude "Hello"
```

检查霖君的 **Logs** 页面，应该能看到请求记录。

## 手动配置

如果自动配置不生效，可以手动配置：

### Claude Code

编辑 `~/.claude/config.json`：

```json
{
  "apiBaseUrl": "http://localhost:8310"
}
```

### OpenCode

编辑 `~/.opencode/config.yaml`：

```yaml
api:
  base_url: http://localhost:8310/v1
```

### 环境变量方式

在 shell 配置文件（如 `~/.zshrc` 或 `~/.bashrc`）中添加：

```bash
# OpenAI 兼容接口
export OPENAI_API_BASE=http://localhost:8310/v1

# Anthropic 接口
export ANTHROPIC_API_BASE=http://localhost:8310
```

重新加载配置：

```bash
source ~/.zshrc
```

## 验证结果

- **预期看到**：CLI 工具正常工作，霖君日志中显示请求记录
- **若未出现**：检查代理是否运行，配置路径是否正确

## 常见问题

### 配置后工具报错

1. 确认霖君代理服务正在运行
2. 确认至少有一个提供商账号已添加
3. 检查端口 8310 是否被占用

### 自动配置未检测到工具

- 确认 CLI 工具已正确安装
- 尝试在终端中运行工具确认可用
- 手动配置作为备选方案

## 下一步

- [查看仪表盘](../dashboard/overview)
- [监控请求日志](../dashboard/logs)
