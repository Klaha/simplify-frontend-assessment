import { NextResponse } from "next/server";
import mockData from '../../../../data.json';

export async function GET(request: Request) {
  return NextResponse.json(mockData, { status: 200 });
}