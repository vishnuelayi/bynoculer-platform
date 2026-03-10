export async function generatePostIdea(data: {
    campaignName: string
    platform: string
  }) {
    const { campaignName, platform } = data
  
    // Temporary mock AI response
    return {
      content: `Exciting news! 🚀 Our ${campaignName} campaign is officially live.
  
  Stay tuned as we reveal something special. Follow along for updates and surprises.
  
  #${campaignName.replace(/\s/g, "")} #LaunchDay`,
      platform,
    }
  }