import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    await this.seedUsuarioPadrao();
  }

  private async seedUsuarioPadrao() {
    await this.usuario.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1, email: 'admin@fittrack.com', senha: 'admin' },
    });
  }
}
