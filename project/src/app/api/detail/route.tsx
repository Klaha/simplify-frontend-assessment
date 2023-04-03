import { NextResponse } from 'next/server';
import mockData from '../../../../data.json';
import { Product } from '@/app/types';

export async function GET(request: Request) {
  const { searchParams }: URL = new URL(request.url);
  const id:String = searchParams.get('id')!;

  return NextResponse.json(mockData.filter((item: Product) => item.id === id), { status: 200 });
}