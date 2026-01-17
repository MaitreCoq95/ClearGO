import { NextResponse } from "next/server"
import { gamificationEngine } from "@/lib/services/gamification-engine"

// Mock users for leaderboard
const mockUsers = [
  { userId: "u1", userName: "Marie Dupont", avatar: undefined, xp: 4520, modulesCompleted: 18 },
  { userId: "u2", userName: "Jean Martin", avatar: undefined, xp: 3890, modulesCompleted: 15 },
  { userId: "u3", userName: "Sophie Bernard", avatar: undefined, xp: 3450, modulesCompleted: 14 },
  { userId: "current", userName: "Vous", avatar: undefined, xp: 2450, modulesCompleted: 8 },
  { userId: "u4", userName: "Pierre Durand", avatar: undefined, xp: 2100, modulesCompleted: 7 },
  { userId: "u5", userName: "Claire Petit", avatar: undefined, xp: 1850, modulesCompleted: 6 },
  { userId: "u6", userName: "Thomas Roux", avatar: undefined, xp: 1620, modulesCompleted: 5 },
  { userId: "u7", userName: "Julie Moreau", avatar: undefined, xp: 1400, modulesCompleted: 4 },
]

const mockTeams = [
  { userId: "t1", userName: "Équipe Production", avatar: undefined, xp: 15200, modulesCompleted: 45 },
  { userId: "t2", userName: "Équipe Logistique", avatar: undefined, xp: 12800, modulesCompleted: 38 },
  { userId: "t3", userName: "Équipe Qualité", avatar: undefined, xp: 11500, modulesCompleted: 35 },
  { userId: "team", userName: "Votre Équipe", avatar: undefined, xp: 8900, modulesCompleted: 28 },
  { userId: "t4", userName: "Équipe Commercial", avatar: undefined, xp: 7200, modulesCompleted: 22 },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const scope = searchParams.get("scope") || "team"
    const period = searchParams.get("period") || "month"

    const users = scope === "team" ? mockUsers : mockTeams
    const currentUserId = scope === "team" ? "current" : "team"

    // Build leaderboard
    const leaderboard = gamificationEngine.buildLeaderboard(users, currentUserId)

    // TODO: Fetch from database with filters
    // const users = await prisma.user.findMany({
    //   where: scope === 'team' ? { teamId: user.teamId } : { organizationId: user.orgId },
    //   orderBy: { totalXp: 'desc' },
    //   take: 50
    // })

    return NextResponse.json({
      leaderboard,
      scope,
      period,
      totalUsers: leaderboard.length,
    })
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    )
  }
}
