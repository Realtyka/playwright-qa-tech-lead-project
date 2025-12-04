import { Page, Response } from '@playwright/test';
import { apiConfig } from '../../utils/apiMap.util';

export class AbstractPage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForApiResponse(
        waitConfig: apiConfig,
        timeout = 3000000,
    ): Promise<Response> {
        return await this.page.waitForResponse(
            (res) => {
                const urlMatches = res.url().includes(waitConfig.endpoint.replace('*', ''));
                const statusMatches = [200].includes(res.status());
                return urlMatches && statusMatches;
            },
            { timeout },
        );
    }
}


