import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createGqlOptions(): GqlModuleOptions | Promise<GqlModuleOptions> {
    return {
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      cors: {
        origin: this.configService.get<string | boolean>('CORS_URI', true),
        credentials: true,
      },
    };
  }
}
