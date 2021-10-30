import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLConfigService } from './graphql.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useClass: GraphQLConfigService,
    }),
  ],
  exports: [GraphQLModule],
})
export class GraphQLConfigModule {}
